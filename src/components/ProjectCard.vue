<script setup>
import { ref } from 'vue'
import { coverSrcs } from '../data/projects.js'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const srcs = coverSrcs(props.project)
const srcIndex = ref(0)
const src = ref(srcs[0])
const tryNextSrc = () => {
  if (srcIndex.value + 1 < srcs.length) {
    srcIndex.value++
    src.value = srcs[srcIndex.value]
  }
}
</script>

<template>
  <router-link :to="{ name: 'Project', params: { id: project.id } }" class="project-card">
    <div class="card-image-wrapper">
      <img :src="src" :alt="project.title" class="card-image" loading="lazy" @error="tryNextSrc" />
      <div class="card-overlay">
        <span class="view-project">View Project</span>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-subtitle">{{ project.subtitle }}</p>
      <div class="card-tags">
        <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.project-card {
  display: block;
  text-decoration: none;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-image-wrapper {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #1a1a1a;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.view-project {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 100px;
  letter-spacing: 0.5px;
}

.card-info {
  padding: 20px 24px 24px;
}

.card-title {
  margin: 0 0 6px;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  line-height: 1.3;
}

.card-subtitle {
  margin: 0 0 14px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.4;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 11px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.2px;
}
</style>
