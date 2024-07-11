import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: HomePage
    },
    {
      path: '/stats',
      name: 'stats',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: HomePage
    },
  ]
})

export default router
