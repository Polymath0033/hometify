import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/investments',
      name: 'investments',
      component: () => import('../views/Investments.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/investments',
      name: 'investments',
      component: () => import('../views/Investments.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQ.vue')
    }
  ]
})

export default router
