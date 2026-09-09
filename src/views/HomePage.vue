<script setup>
import { ref, computed } from 'vue'
import { projects, categories } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.vue'

const activeCategory = ref('All')
const activeTab = ref('projects')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
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
          Interaction & Sound Designer based in Stuttgart.
          <br />
          Creating immersive audio experiences and interactive digital products.
        </p>
      </div>
    </header>

    <section class="tabs-section">
      <div class="tabs">
        <button :class="['tab-btn', { active: activeTab === 'career' }]" @click="activeTab = 'career'">
          Werdegang
        </button>
        <button :class="['tab-btn', { active: activeTab === 'projects' }]" @click="activeTab = 'projects'">
          Projekte
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
      <div class="career-placeholder">
        <h2 class="career-title">Werdegang</h2>
        <p class="career-text">
          Hier folgt in Kürze mein Lebenslauf / Werdegang. Inhalte werden eingefügt.
        </p>
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
  padding: 0 40px 40px;
}

.tabs {
  display: flex;
  gap: 8px;
  padding-bottom: 1px;
}

.tab-btn {
  padding: 10px 24px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  color: rgba(255, 255, 255, 0.45);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
}

.tab-btn.active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.career-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.career-placeholder {
  padding: 80px 40px;
  border: 1px dashed rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  text-align: center;
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
  gap: 8px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: transparent;
  color: rgba(255, 255, 255, 0.45);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.7);
}

.filter-btn.active {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #fff;
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

  .career-placeholder {
    padding: 60px 20px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
