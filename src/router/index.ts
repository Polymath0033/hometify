import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUp from '@/views/SignUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
    },
    {
      path:'/log-in',
      name:"Login",
      component:LoginView
    },
    {
      path:'/sign-up',
      name:"Signup",
      component:SignUp
    },
    {
      path:'/congratulations',
      name:"Congratulations",
      component:()=>import('../views/Congratulations.vue')
    },
    {
      path:'/reset-password',
      name:"Reset Password",
      component:()=>import('../views/ResetPassword.vue')
    },
    {
      path:'/confirm-password',
      name:'Confirm Password',
      component:()=>import('../views/ConfirmPassword.vue')
    }
  ]
})

export default router
