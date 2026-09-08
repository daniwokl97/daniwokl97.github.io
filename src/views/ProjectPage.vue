<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))

const isYouTubeEmbed = (url) => url && url.includes('youtube.com/embed')
const isVideoUrl = (url) => url && (url.includes('youtube.com') || url.includes('vimeo.com') || url.includes('adobe.io'))
</script>

<template>
  <div v-if="project" class="project-page">
    <div class="project-header">
      <router-link to="/" class="back-link">&larr; Back to all projects</router-link>

      <h1 class="project-title">{{ project.title }}</h1>
      <p class="project-subtitle">{{ project.subtitle }}</p>

      <div class="project-meta">
        <div class="meta-item" v-if="project.year">
          <span class="meta-label">Year</span>
          <span class="meta-value">{{ project.year }}</span>
        </div>
        <div class="meta-item" v-if="project.category">
          <span class="meta-label">Category</span>
          <span class="meta-value">{{ project.category }}</span>
        </div>
        <div class="meta-item" v-if="project.status">
          <span class="meta-label">Status</span>
          <span class="meta-value">{{ project.status }}</span>
        </div>
      </div>
    </div>

    <div class="project-hero" v-if="project.cover">
      <img :src="project.cover" :alt="project.title" class="hero-image" />
    </div>

    <div class="project-content">
      <div class="content-grid">
        <div class="content-main">
          <section class="section">
            <h2 class="section-title">About</h2>
            <div class="description">
              <p v-for="(para, i) in project.description.split('\n\n')" :key="i">{{ para }}</p>
            </div>
          </section>

          <section class="section" v-if="project.role">
            <h2 class="section-title">My Role</h2>
            <div class="description role-text">
              <p v-for="(para, i) in project.role.split('\n\n')" :key="i">{{ para }}</p>
            </div>
          </section>

          <section class="section" v-if="project.images.length">
            <div class="project-images">
              <img
                v-for="(img, i) in project.images"
                :key="i"
                :src="img"
                :alt="`${project.title} - Image ${i + 1}`"
                class="project-image"
                loading="lazy"
              />
            </div>
          </section>

          <section class="section" v-if="project.videos.length">
            <div class="project-videos">
              <div v-for="(video, i) in project.videos" :key="i" class="video-wrapper">
                <iframe
                  v-if="isYouTubeEmbed(video)"
                  :src="video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <a v-else :href="video" target="_blank" rel="noopener" class="video-link">
                  Watch Video &rarr;
                </a>
              </div>
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
              >
                {{ link.label }} &rarr;
              </a>
            </div>
          </div>

          <div class="sidebar-section">
            <a :href="project.behanceUrl" target="_blank" rel="noopener" class="behance-link">
              View on Behance &rarr;
            </a>
          </div>
        </aside>
      </div>
    </div>
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

.project-header {
  max-width: 1400px;
  margin: 0 auto;
  padding: 48px 40px 0;
}

.back-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 32px;
  transition: color 0.2s;
}

.back-link:hover {
  color: rgba(255, 255, 255, 0.7);
}

.project-title {
  margin: 0 0 8px;
  font-size: 44px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;
  line-height: 1.15;
}

.project-subtitle {
  margin: 0 0 28px;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
}

.project-meta {
  display: flex;
  gap: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
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
  color: rgba(255, 255, 255, 0.25);
}

.meta-value {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.project-hero {
  max-width: 1400px;
  margin: 40px auto 0;
  padding: 0 40px;
}

.hero-image {
  width: 100%;
  border-radius: 12px;
  display: block;
}

.project-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 60px;
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

.project-images {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-image {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.project-videos {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  background: #111;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;
}

.video-link:hover {
  color: #fff;
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

.behance-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  transition: all 0.2s;
}

.behance-link:hover {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.25);
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
}

@media (max-width: 640px) {
  .project-header {
    padding: 32px 20px 0;
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

  .project-hero {
    padding: 0 20px;
  }

  .project-content {
    padding: 40px 20px;
  }
}
</style>
