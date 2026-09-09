<script setup>
import { ref, computed, watch, onBeforeUnmount, nextTick } from 'vue'
import { projects, categories } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'

const activeCategory = ref('All')
const activeTab = ref('projects')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.categories.includes(activeCategory.value))
})

const profile = {
  name: 'Daniel Kling',
  role: 'UX & Sound Designer',
  bio: 'I combine UX design and professional sound design in one profile. I apply my skills flexibly: I combine both disciplines in interactive projects, but I equally enjoy working dedicatedly in just one of the two fields. I build on my practical foundation as a certified sound designer and am currently complementing it in my Master\'s degree with modern interaction design and the use of Artificial Intelligence in media development.',
}

const contact = [
  { label: 'Email', value: 'dani_kling@web.de' },
  { label: 'Address', value: 'Böblinger Straße, 70199 Stuttgart' },
]

const skills = [
  'Pro Tools',
  'Sequoia',
  'Unity',
  'FMOD',
  'Wwise',
  'JavaScript',
  'C++',
  'Python',
  'HTML',
  'CSS',
  'Figma',
  'Adobe Creative Cloud',
  'UX/UI Design & Interaction Design',
]

const languages = [
  { name: 'German', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Beginner' },
  { name: 'Swedish', level: 'Beginner' },
]

const education = [
  {
    period: '2026 – today',
    title: 'Computer Science and Media',
    org: 'Stuttgart Media University',
    detail: "Master's degree",
    year: 2026,
    logo: '/logos/hdm.png',
  },
  {
    period: '2025',
    title: 'Exchange Semester',
    org: 'Jönköping University (SWE)',
    detail: '',
    year: 2025,
    logo: '/logos/jonkoping.png',
  },
  {
    period: '2022 – 2026',
    title: 'Mobile Media',
    org: 'Stuttgart Media University',
    detail: "Bachelor's degree (1.3) with distinction",
    year: 2022,
    logo: '/logos/hdm.png',
  },
  {
    period: '2019 – 2022',
    title: 'Sound Design and Film Sound',
    org: 'Filmakademie Baden-Württemberg',
    detail: 'Diploma (1.3)',
    year: 2019,
    logo: '/logos/filmakademie.jpg',
  },
  {
    period: '2016 – 2019',
    title: 'Media Designer for Image and Sound',
    org: 'SWR Stuttgart / it.schule',
    detail: 'Vocational training',
    year: 2016,
    logo: '/logos/swr.png',
  },
]

const experience = [
  {
    period: '2026 – today',
    title: 'Research Assistant',
    org: 'Fraunhofer Institute for Building Physics (IBP)',
    detail: 'Urban Acoustics – Software development / Prototyping for ML-based sound generation',
    year: 2026,
    logo: '/logos/fraunhofer.jpg',
  },
  {
    period: '2024 – 2026',
    title: 'Internship & Working Student',
    org: 'Mercedes-Benz AG',
    detail: 'Working student position in total staging',
    year: 2024,
    logo: '/logos/mercedes.jpg',
  },
  {
    period: '2020 – 2022',
    title: 'Freelance',
    org: '',
    detail: 'Camera work for documentary films · Audio post-production of reports',
    year: 2020,
    logo: '',
  },
  {
    period: '2019 – 2020',
    title: 'Video and Audio Production',
    org: 'SWR Stuttgart',
    detail: 'Video and audio production for the SWR Sport editorial team',
    year: 2019,
    logo: '/logos/swr.png',
  },
  {
    period: '2015 – 2016',
    title: 'Federal Volunteer Service',
    org: 'AHW School, Markgröningen',
    detail: '',
    year: 2015,
    logo: '/logos/ahw.png',
  },
]

let revealObserver = null

const initReveal = () => {
  if (revealObserver) revealObserver.disconnect()
  revealObserver = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.career .reveal').forEach(el => revealObserver.observe(el))
}

watch(
  activeTab,
  tab => {
    if (tab === 'career') nextTick(initReveal)
  }
)

onBeforeUnmount(() => {
  if (revealObserver) revealObserver.disconnect()
})
</script>

<template>
  <div class="home">
    <header class="hero">
      <div class="hero-content">
        <img src="/Portrait.png" alt="Portrait of Daniel Kling" class="hero-portrait" />
        <p class="hero-label">Portfolio</p>
        <h1 class="hero-title">Daniel Kling</h1>
        <p class="hero-subtitle">
          UX & Sound Designer based in Stuttgart.
          <br />
          Creating immersive audio experiences and interactive digital products.
        </p>
      </div>
    </header>

    <section class="tabs-section">
      <div class="tabs">
        <button :class="['tab-btn', { active: activeTab === 'projects' }]" @click="activeTab = 'projects'">
          Projects
        </button>
        <button :class="['tab-btn', { active: activeTab === 'career' }]" @click="activeTab = 'career'">
          Career
        </button>
      </div>
    </section>

    <section v-if="activeTab === 'projects'" class="projects-section">
      <div class="filter-bar">
        <button v-for="cat in categories" :key="cat" :class="['filter-btn', { active: activeCategory === cat }]"
          @click="activeCategory = cat">
          {{ cat }}
        </button>
      </div>

      <div class="projects-grid">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
    </section>

    <section v-else class="career-section">
      <div class="career">
        <div class="career-hero reveal">
          <div class="career-hero-portrait">
            <img src="/Portrait.png" alt="Portrait of Daniel Kling" />
          </div>
          <div class="career-hero-text">
            <p class="career-role">{{ profile.role }}</p>
            <h2 class="career-name">{{ profile.name }}</h2>
            <p class="career-bio">{{ profile.bio }}</p>
          </div>
        </div>

        <div class="career-sidebar">
          <div class="info-card reveal">
            <h3 class="info-label">Contact</h3>
            <ul class="info-list">
              <li v-for="item in contact" :key="item.label" class="info-item">
                <span class="info-key">{{ item.label }}</span>
                <a v-if="item.href" :href="item.href" target="_blank" rel="noopener" class="info-value link">
                  {{ item.value }}
                </a>
                <span v-else class="info-value">{{ item.value }}</span>
              </li>
            </ul>
          </div>

          <div class="info-card reveal">
            <h3 class="info-label">Languages</h3>
            <ul class="info-list">
              <li v-for="lang in languages" :key="lang.name" class="info-item">
                <span class="info-key">{{ lang.name }}</span>
                <span class="info-value">{{ lang.level }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="career-main">
          <div class="timeline-block reveal">
            <h3 class="timeline-heading">Education</h3>
            <div class="timeline">
              <div v-for="(item, i) in education" :key="i" class="tl-item">
                <div v-if="item.logo" class="tl-marker logo-marker">
                  <img :src="item.logo" :alt="item.org" class="tl-logo" />
                </div>
                <div v-else class="tl-marker"></div>
                <div class="tl-card">
                  <span class="tl-period">{{ item.period }}</span>
                  <h4 class="tl-title">{{ item.title }}</h4>
                  <p class="tl-org">{{ item.org }}</p>
                  <p v-if="item.detail" class="tl-detail">{{ item.detail }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-block reveal">
            <h3 class="timeline-heading">Work Experience</h3>
            <div class="timeline">
              <div v-for="(item, i) in experience" :key="i" class="tl-item">
                <div v-if="item.logo" class="tl-marker logo-marker">
                  <img :src="item.logo" :alt="item.org" class="tl-logo" />
                </div>
                <div v-else class="tl-marker"></div>
                <div class="tl-card">
                  <span class="tl-period">{{ item.period }}</span>
                  <h4 class="tl-title">{{ item.title }}</h4>
                  <p v-if="item.org" class="tl-org">{{ item.org }}</p>
                  <p v-if="item.detail" class="tl-detail">{{ item.detail }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="info-card skills-card reveal">
          <h3 class="info-label">Skills</h3>
          <div class="skill-tags">
            <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 160px 40px 80px;
  text-align: center;
}

.hero-content {
  max-width: 640px;
  margin: 0 auto;
}

.hero-portrait {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 28px;
  display: block;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5);
  border: 3px solid rgba(255, 255, 255, 0.08);
}

.hero-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.3);
  margin: 0 0 20px;
}

.hero-title {
  margin: 0 0 16px;
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1.5px;
  line-height: 1.1;
}

.hero-subtitle {
  margin: 0;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.7;
}

.projects-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.tabs-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px 48px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 22px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
}

.tab-btn {
  flex: 1;
  padding: 18px 24px;
  border-radius: 16px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tab-btn:hover {
  color: rgba(255, 255, 255, 0.75);
}

.tab-btn.active {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08));
  color: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}

.career-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.career {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  align-items: start;
}

.career-hero {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 48px;
  padding: 40px 56px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.3);
}

.career-hero-portrait {
  flex-shrink: 0;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.career-hero-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.career-hero-text {
  min-width: 0;
}

.career-role {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.45);
}

.career-name {
  margin: 0 0 18px;
  font-size: 34px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
}

.career-bio {
  margin: 0;
  max-width: 720px;
  font-size: 16px;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.6);
}

.career-sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.career-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;
}

.info-card {
  padding: 28px 32px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.info-label {
  margin: 0 0 18px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.35);
}

.info-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px 0;
}

.info-item+.info-item {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.info-key {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.35);
}

.info-value {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.info-value.link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
}

.info-value.link:hover {
  color: #fff;
}

.skills-card {
  grid-column: 1 / -1;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  font-size: 13px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.2px;
}

.timeline-block {
  padding: 32px 40px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 24px;
}

.timeline-heading {
  margin: 0 0 28px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.45);
}

.timeline {
  position: relative;
  margin-left: 12px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 3px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.05));
}

.tl-item {
  position: relative;
  padding: 0 0 32px;
}

.tl-item:last-child {
  padding-bottom: 4px;
}

.tl-marker {
  position: absolute;
  left: -4px;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #1a1a1a;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.08);
}

.tl-marker.logo-marker {
  left: -17px;
  top: 0;
  width: 40px;
  height: 40px;
  padding: 6px;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
}

.tl-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.tl-card {
  padding-left: 48px;
}

.tl-period {
  display: inline-block;
  margin-bottom: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.5);
}

.tl-title {
  margin: 0 0 4px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}

.tl-org {
  margin: 0 0 6px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.tl-detail {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.45);
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

.career-title {
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 600;
  color: #fff;
}

.career-text {
  margin: 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
}

.filter-bar {
  display: flex;
  gap: 4px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.filter-btn {
  padding: 10px 20px 14px;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-btn:hover {
  color: rgba(255, 255, 255, 0.75);
}

.filter-btn.active {
  border-bottom-color: #fff;
  color: #fff;
  font-weight: 600;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .career {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero-title {
    font-size: 42px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 120px 20px 60px;
  }

  .hero-portrait {
    width: 120px;
    height: 120px;
  }

  .hero-title {
    font-size: 34px;
  }

  .hero-subtitle {
    font-size: 15px;
  }

  .projects-section,
  .tabs-section,
  .career-section {
    padding: 0 20px;
  }

  .career {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .career-main {
    grid-template-columns: 1fr;
  }

  .career-hero {
    padding: 32px 24px;
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
    text-align: center;
  }

  .career-hero-portrait {
    width: 130px;
    height: 130px;
  }

  .timeline-block {
    padding: 24px 20px;
  }

  .info-card {
    padding: 24px 20px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
