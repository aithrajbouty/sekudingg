import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Module from '../views/Module.vue'
import Modulsaya from '../views/Modulsaya.vue'
import Contactus from '../views/Contactus.vue'
import Aboutus from '../views/Aboutus.vue'
import Faq from '../views/Faq.vue'
import Profile from '../views/Profile.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Kelas from '../views/Kelas.vue'
import KelasView from '../views/KelasView.vue'
import KelasViewLock from '../views/KelasViewLock.vue'
import Congrats from '../views/Congrats.vue'

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
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {guest: true}
  },
  {
    path: '/kelas/:moduleid',
    name: 'Kelas',
    component: Kelas
  },
  {
    path: '/kelasview/:moduleid',
    name: 'KelasView',
    component: KelasView,
    meta: {requiresAuth: true}
  },
  {
    path: '/kelasviewlock/:moduleid',
    name: 'KelasViewLock',
    component: KelasViewLock
  },
  {
    path: '/congrats',
    name: 'Congrats',
    component: Congrats
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {guest: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(localStorage.getItem("token") == null){
      next({
        path: "/kelasviewlock/" + to.params.moduleid,
        params: { nextUrl: to.fullPath }
      })
    } else next()
  }
  else if(to.matched.some(record => record.meta.guest)){
    if(localStorage.getItem("token") == null){
      next()
    } else{
      next({ name: "Module" })
    }
  }else{
    next()
  }
})

export default router