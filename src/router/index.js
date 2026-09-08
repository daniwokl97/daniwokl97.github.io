import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectPage from '../views/ProjectPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/project/:id', name: 'Project', component: ProjectPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
