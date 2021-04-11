import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Module from '../views/Module.vue'
import Modulsaya from '../views/ModulSaya.vue'
import Contactus from '../views/Contactus.vue'
import Aboutus from '../views/Aboutus.vue'
import Faq from '../views/Faq.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/module',
    name: 'Module',
    component: Module
  },
  {
    path: '/modulsaya',
    name: 'Modulsaya',
    component: Modulsaya
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: Contactus
  },
  {
    path: '/aboutus',
    name: 'Aboutus',
    component: Aboutus
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router