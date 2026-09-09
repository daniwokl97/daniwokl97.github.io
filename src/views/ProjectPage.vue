<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects, coverSrcs } from '../data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))

const coverCandidates = computed(() => coverSrcs(project.value))
const coverIndex = ref(0)
const coverSrc = computed(() => coverCandidates.value[Math.min(coverIndex.value, coverCandidates.value.length - 1)])
const tryNextCover = () => {
  if (coverIndex.value + 1 < coverCandidates.value.length) coverIndex.value++
}

const isYouTubeEmbed = (url) => url && url.includes('youtube.com/embed')
const isLocalVideo = (url) => url && /\.(mp4|webm|ogg)$/i.test(url.split('?')[0])
const videoSrc = (video) => (typeof video === 'string' ? video : video.url)
const videoLabel = (video) => (typeof video === 'string' ? '' : video.label || '')

const videoItems = computed(() =>
  (project.value.videos || []).map(v => {
    const src = videoSrc(v)
    return {
      type: isYouTubeEmbed(src) ? 'youtube' : isLocalVideo(src) ? 'video' : 'link',
      src,
      label: videoLabel(v),
    }
  })
)

const imageItems = computed(() =>
  (project.value.images || []).map(src => ({ type: 'image', src }))
)

const descriptionItems = computed(() => {
  const paras = (project.value.description || '').split('\n\n')
  const embeds = project.value.embeds || []
  const items = []
  let embedIndex = 0
  for (const para of paras) {
    items.push({ type: 'para', text: para })
    if (/^The (first|second) tool/i.test(para.trim()) && embeds[embedIndex]) {
      items.push({ type: 'embed', embed: embeds[embedIndex] })
      embedIndex++
    }
  }
  return items
})

const heroBg = ref(null)
const videoCarouselSection = ref(null)
const videoCarouselTrack = ref(null)
const imageCarouselSection = ref(null)
const imageCarouselTrack = ref(null)
const wizardSection = ref(null)
let heroHeight = 0
let rafId = null

const handleMessage = (e) => {
  if (e.data === 'dfr-go-portal' && wizardSection.value) {
    wizardSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const applyParallax = () => {
  const el = heroBg.value
  if (!el) return
  const y = window.scrollY
  if (y <= 0) {
    el.style.transform = 'translateY(0)'
    return
  }
  const maxShift = heroHeight * 0.2
  const shift = Math.min(y * 0.4, maxShift)
  el.style.transform = `translateY(${shift}px)`
}

const measureHero = () => {
  if (heroBg.value) heroHeight = heroBg.value.parentElement.offsetHeight
}

const measureCarouselSection = (section, track) => {
  if (!section || !track) return
  const trackWidth = track.scrollWidth
  const viewportW = window.innerWidth
  const viewportH = window.innerHeight
  section.style.height = `${Math.max(trackWidth - viewportW, 0) + viewportH}px`
}

const updateCarouselSection = (section, track) => {
  if (!section || !track) return
  const rect = section.getBoundingClientRect()
  const viewportW = window.innerWidth
  const viewportH = window.innerHeight
  const total = Math.max(section.offsetHeight - viewportH, 0)
  const raw = Math.min(Math.max(-rect.top / total, 0), 1)
  const progress = raw * raw * (3 - 2 * raw)
  const maxShift = Math.max(track.scrollWidth - viewportW, 0)

  const entryT = Math.min(raw / 0.3, 1)
  const entry = entryT * entryT * (3 - 2 * entryT)
  const lift = (1 - entry) * 64
  const entryScale = 0.92 + 0.08 * entry
  track.style.transform = `translate3d(${-progress * maxShift}px, ${lift}px, 0) scale(${entryScale})`

  const viewportCenter = viewportW / 2
  const items = track.querySelectorAll('.carousel-item')
  for (const el of items) {
    const r = el.getBoundingClientRect()
    const center = r.left + r.width / 2
    const dist = Math.abs(center - viewportCenter)
    const maxDist = viewportW / 2 + r.width / 2
    const t = Math.max(0, 1 - dist / maxDist)
    const smooth = t * t * (3 - 2 * t)
    const scale = 1 + 0.12 * smooth
    el.style.transform = `scale(${scale})`
    el.style.zIndex = Math.round(smooth * 10)
  }
}

const measureCarousel = () => {
  measureCarouselSection(videoCarouselSection.value, videoCarouselTrack.value)
  measureCarouselSection(imageCarouselSection.value, imageCarouselTrack.value)
}

const updateCarousel = () => {
  updateCarouselSection(videoCarouselSection.value, videoCarouselTrack.value)
  updateCarouselSection(imageCarouselSection.value, imageCarouselTrack.value)
}

const scheduleCarousel = () => {
  if (rafId != null) return
  rafId = requestAnimationFrame(() => {
    rafId = null
    measureCarousel()
    updateCarousel()
  })
}

const onVideoLoaded = (e) => {
  const video = e.target
  if (video.videoHeight > video.videoWidth) {
    const parent = video.closest('.carousel-item') || video.closest('.single-video-item')
    if (parent) parent.classList.add('portrait')
  }
  scheduleCarousel()
}

onMounted(() => {
  measureHero()
  scheduleCarousel()
  window.addEventListener('message', handleMessage)
  window.addEventListener('scroll', applyParallax, { passive: true })
  window.addEventListener('resize', measureHero, { passive: true })
  window.addEventListener('scroll', scheduleCarousel, { passive: true })
  window.addEventListener('resize', scheduleCarousel, { passive: true })
  window.addEventListener('load', scheduleCarousel)
  applyParallax()
})

onUnmounted(() => {
  window.removeEventListener('message', handleMessage)
  window.removeEventListener('scroll', applyParallax)
  window.removeEventListener('resize', measureHero)
  window.removeEventListener('scroll', scheduleCarousel)
  window.removeEventListener('resize', scheduleCarousel)
  window.removeEventListener('load', scheduleCarousel)
  if (rafId != null) cancelAnimationFrame(rafId)
})
</script>

<template>
  <div v-if="project" class="project-page">
    <header class="project-hero" v-if="project.cover">
      <div class="hero-bg">
        <img :src="coverSrc" :alt="project.title" class="hero-bg-image" ref="heroBg" @error="tryNextCover" />
        <div class="hero-scrim"></div>
      </div>

      <div class="hero-content">
        <router-link to="/" class="back-link">&larr; Back to all projects</router-link>

        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-subtitle">{{ project.subtitle }}</p>

        <div class="project-meta">
          <div class="meta-item" v-if="project.year">
            <span class="meta-label">Year</span>
            <span class="meta-value">{{ project.year }}</span>
          </div>
          <div class="meta-item" v-if="project.categories && project.categories.length">
            <span class="meta-label">Categories</span>
            <div class="meta-chips">
              <span v-for="cat in project.categories" :key="cat" class="meta-chip">{{ cat }}</span>
            </div>
          </div>
          <div class="meta-item" v-if="project.status">
            <span class="meta-label">Status</span>
            <span class="meta-value">{{ project.status }}</span>
          </div>
        </div>
      </div>
    </header>

    <header class="project-hero no-cover" v-else>
      <div class="hero-content">
        <router-link to="/" class="back-link">&larr; Back to all projects</router-link>

        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-subtitle">{{ project.subtitle }}</p>

        <div class="project-meta">
          <div class="meta-item" v-if="project.year">
            <span class="meta-label">Year</span>
            <span class="meta-value">{{ project.year }}</span>
          </div>
          <div class="meta-item" v-if="project.categories && project.categories.length">
            <span class="meta-label">Categories</span>
            <div class="meta-chips">
              <span v-for="cat in project.categories" :key="cat" class="meta-chip">{{ cat }}</span>
            </div>
          </div>
          <div class="meta-item" v-if="project.status">
            <span class="meta-label">Status</span>
            <span class="meta-value">{{ project.status }}</span>
          </div>
        </div>
      </div>
    </header>

    <div class="project-content">
      <div class="content-grid">
        <div class="content-main">
          <section class="section">
            <h2 class="section-title">About</h2>
            <div class="description">
              <template v-for="(item, i) in descriptionItems" :key="i">
                <p v-if="item.type === 'para'">{{ item.text }}</p>
                <div v-else class="embed-block">
                  <h3 class="embed-label">{{ item.embed.label }}</h3>
                  <iframe
                    :src="item.embed.src"
                    :style="{ height: item.embed.height + 'px' }"
                    class="embed-frame"
                    loading="lazy"
                    :title="item.embed.label"
                  ></iframe>
                </div>
              </template>
            </div>
          </section>
        </div>

        <aside class="content-sidebar">
          <div class="sidebar-section" v-if="project.tools.length">
            <h3 class="sidebar-label">Tools</h3>
            <div class="sidebar-tags">
              <span v-for="tool in project.tools" :key="tool" class="sidebar-tag">{{ tool }}</span>
            </div>
          </div>

          <div class="sidebar-section" v-if="project.tags.length">
            <h3 class="sidebar-label">Tags</h3>
            <div class="sidebar-tags">
              <span v-for="tag in project.tags" :key="tag" class="sidebar-tag">{{ tag }}</span>
            </div>
          </div>

          <div class="sidebar-section" v-if="project.externalLinks.length">
            <h3 class="sidebar-label">Links</h3>
            <div class="sidebar-links">
              <a
                v-for="link in project.externalLinks"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="sidebar-link"
                :class="{ 'figma-link': link.url.includes('figma.com') }"
              >
                {{ link.label }} &rarr;
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div class="project-content exclusive-access" v-if="project.exclusiveEmbed" ref="wizardSection">
      <h2 class="section-title">Exclusive Access</h2>
      <div class="embed-block">
        <h3 class="embed-label">{{ project.exclusiveEmbed.label }}</h3>
        <iframe
          :src="project.exclusiveEmbed.src"
          :style="{ height: project.exclusiveEmbed.height + 'px' }"
          class="embed-frame"
          loading="lazy"
          :title="project.exclusiveEmbed.label"
        ></iframe>
      </div>
    </div>

    <section class="single-video" v-if="videoItems.length === 1">
      <figure class="single-video-item" :class="videoItems[0].type">
        <video
          v-if="videoItems[0].type === 'video'"
          :src="videoItems[0].src"
          controls
          preload="metadata"
          @loadedmetadata="onVideoLoaded($event)"
        ></video>
        <iframe
          v-else-if="videoItems[0].type === 'youtube'"
          :src="videoItems[0].src"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a v-else :href="videoItems[0].src" target="_blank" rel="noopener" class="carousel-link">
          Watch Video &rarr;
        </a>
        <figcaption v-if="videoItems[0].label">{{ videoItems[0].label }}</figcaption>
      </figure>
    </section>

    <section class="carousel-section video-carousel" v-if="videoItems.length > 1" ref="videoCarouselSection">
      <div class="carousel-sticky">
        <div class="carousel-track" ref="videoCarouselTrack">
          <figure
            v-for="(item, i) in videoItems"
            :key="i"
            class="carousel-item"
            :class="item.type"
          >
            <video
              v-if="item.type === 'video'"
              :src="item.src"
              controls
              preload="metadata"
              @loadedmetadata="onVideoLoaded($event)"
            ></video>
            <iframe
              v-else-if="item.type === 'youtube'"
              :src="item.src"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <a v-else :href="item.src" target="_blank" rel="noopener" class="carousel-link">
              Watch Video &rarr;
            </a>
            <figcaption v-if="item.label">{{ item.label }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <div class="project-content">
      <section class="section" v-if="project.role">
        <h2 class="section-title">My Role</h2>
        <div class="description role-text">
          <p v-for="(para, i) in project.role.split('\n\n')" :key="i">{{ para }}</p>
        </div>
      </section>
    </div>

    <section class="carousel-section image-carousel" v-if="imageItems.length" ref="imageCarouselSection">
      <div class="carousel-sticky">
        <div class="carousel-track" ref="imageCarouselTrack">
          <figure
            v-for="(item, i) in imageItems"
            :key="i"
            class="carousel-item"
            :class="item.type"
          >
            <img
              :src="item.src"
              :alt="`${project.title} - Image ${i + 1}`"
              @load="scheduleCarousel"
            />
          </figure>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="not-found">
    <h1>Project not found</h1>
    <router-link to="/">Back to home</router-link>
  </div>
</template>

<style scoped>
.project-page {
  padding-top: 72px;
}

.project-hero {
  position: relative;
  height: 65vh;
  min-height: 420px;
  max-height: 720px;
  overflow: hidden;
}

.project-hero.no-cover {
  height: auto;
  min-height: 0;
  max-height: none;
}

.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero-bg-image {
  position: absolute;
  top: -20%;
  left: 0;
  width: 100%;
  height: 140%;
  object-fit: cover;
  will-change: transform;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.55) 0%,
    rgba(10, 10, 10, 0.2) 45%,
    rgba(10, 10, 10, 0.95) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 96px 40px 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.back-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 32px;
  transition: color 0.2s;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
}

.back-link:hover {
  color: #fff;
}

.project-title {
  margin: 0 0 8px;
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;
  line-height: 1.15;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
}

.project-subtitle {
  margin: 0 0 28px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  text-shadow: 0 1px 10px rgba(0, 0, 0, 0.45);
}

.project-meta {
  display: flex;
  gap: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.meta-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.meta-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.5);
}

.meta-value {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
}

.meta-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.meta-chip {
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75);
}

.project-hero.no-cover .hero-content {
  height: auto;
  padding-top: 48px;
}

.project-hero.no-cover .project-meta {
  border-bottom: none;
}

.project-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 40px;
  position: relative;
  z-index: 1;
}

.exclusive-access {
  scroll-margin-top: 96px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 40px;
  align-items: start;
}

.section {
  margin-bottom: 48px;
}

.section-title {
  margin: 0 0 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.25);
}

.description p {
  margin: 0 0 16px;
  font-size: 16px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.6);
}

.description p:last-child {
  margin-bottom: 0;
}

.embed-block {
  margin-bottom: 48px;
}

.embed-block:last-child {
  margin-bottom: 0;
}

.embed-label {
  margin: 0 0 12px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.35);
}

.embed-frame {
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.35);
}

.single-video {
  display: flex;
  justify-content: center;
  padding: 0 4vw;
}

.single-video-item {
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.single-video-item.youtube {
  width: min(calc(78vh * 16 / 9), 84vw);
  aspect-ratio: 16 / 9;
}

.single-video-item.video {
  width: min(calc(78vh * 16 / 9), 84vw);
  aspect-ratio: 16 / 9;
}

.single-video-item.portrait {
  width: auto;
  height: 78vh;
  aspect-ratio: auto;
}

.single-video-item iframe,
.single-video-item video {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
  background: #111;
  object-fit: contain;
}

.single-video-item.portrait video {
  height: 78vh;
  width: auto;
  object-fit: contain;
}

.single-video-item figcaption {
  position: absolute;
  bottom: -32px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.35);
}

.carousel-section {
  position: relative;
}

.carousel-sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.carousel-track {
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 0 8vw;
  will-change: transform;
}

.carousel-item {
  margin: 0;
  position: relative;
  flex: 0 0 auto;
  height: 64vh;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.carousel-item img {
  height: 100%;
  width: auto;
  max-width: none;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
}

.carousel-item.video,
.carousel-item.youtube {
  width: min(calc(64vh * 16 / 9), 84vw);
}

.carousel-item.portrait {
  width: auto;
  height: 78vh;
}

.carousel-item.portrait video {
  height: 78vh;
  width: auto;
  object-fit: contain;
}

.carousel-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  background: #111;
}

.carousel-item iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
  background: #111;
}

.carousel-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 320px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  transition: color 0.2s, border-color 0.2s;
}

.carousel-link:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}

.carousel-item figcaption {
  position: absolute;
  bottom: -10px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.02em;
}

.content-sidebar {
  position: sticky;
  top: 112px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.sidebar-label {
  margin: 0 0 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.2);
}

.sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sidebar-tag {
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.sidebar-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-link {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.sidebar-link:hover {
  color: #fff;
}

.sidebar-link.figma-link {
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  font-weight: 500;
  transition: all 0.2s;
}

.sidebar-link.figma-link:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.05);
}

.not-found {
  padding: 200px 40px;
  text-align: center;
}

.not-found h1 {
  margin: 0 0 16px;
  color: #fff;
  font-size: 32px;
}

.not-found a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 16px;
}

.not-found a:hover {
  color: #fff;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .content-sidebar {
    position: static;
  }

  .carousel-item {
    height: 52vh;
  }

  .carousel-item.video,
  .carousel-item.youtube {
    width: min(calc(52vh * 16 / 9), 84vw);
  }
}

@media (max-width: 640px) {
  .hero-content {
    padding: 72px 20px 40px;
  }

  .project-title {
    font-size: 30px;
  }

  .project-subtitle {
    font-size: 15px;
  }

  .project-meta {
    gap: 24px;
    flex-wrap: wrap;
  }

  .project-content {
    padding: 40px 20px;
  }

  .carousel-track {
    gap: 28px;
    padding: 0 12vw;
  }

  .carousel-item {
    height: 42vh;
  }

  .carousel-item img {
    max-width: 80vw;
  }

  .carousel-item.video,
  .carousel-item.youtube {
    width: min(calc(42vh * 16 / 9), 84vw);
  }

  .carousel-item figcaption {
    font-size: 12px;
  }
}
</style>
