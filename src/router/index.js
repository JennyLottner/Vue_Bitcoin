import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import StatsPage from '../pages/StatsPage.vue'
import AboutPage from '../pages/AboutPage.vue'

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
      path: '/contact/edit/:_id?',
      name: 'edit',
      component: ContactEdit
    },
    {
      path: '/stats',
      name: 'stats',
      component: StatsPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
  ]
})

export default router
