import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Targets from '@/pages/Targets'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/targets',
    component: Targets
  }
]

const router = new VueRouter({
  routes
})

export default router
