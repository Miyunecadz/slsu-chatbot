import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@views/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
