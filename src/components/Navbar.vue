<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => route.name === 'Home')
</script>

<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="logo">Daniel Kling</router-link>
      <div class="nav-links">
        <router-link to="/" :class="{ active: isHome }">Work</router-link>
        <a href="https://www.behance.net/danielkling2" target="_blank" rel="noopener">Behance</a>
        <a href="https://www.linkedin.com/in/daniel-kling-413761235/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://www.crew-united.com/de/Daniel-Kling_571716.html#!searchterm=Daniel%20kling" target="_blank"
          rel="noopener">Crew United</a>
        <a href="https://www.imdb.com/de/name/nm4396803/
" target="_blank" rel="noopener">IMDb</a>



      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.3px;
}

.nav-links {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #fff;
}

@media (max-width: 768px) {
  .navbar-inner {
    padding: 0 20px;
    height: 60px;
  }
}
</style>
