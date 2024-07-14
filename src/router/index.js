import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import StatsPage from '../pages/StatsPage.vue'
import About from '../pages/About.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'details',
      component: ContactDetails
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsPage
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})

export default router
