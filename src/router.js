import VueRouter from 'vue-router'

import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Targets from '@/pages/Targets'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/targets',
    name: 'targets',
    component: Targets
  }
]

const router = new VueRouter({
  routes
})

export default router
