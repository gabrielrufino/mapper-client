import VueRouter from 'vue-router'

import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Targets from '@/pages/Targets'
import Target from '@/pages/Target'

const routes = [
  {
    path: '/mapper',
    component: Home,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/targets',
        name: 'targets',
        component: Targets
      }
    ]
  },
  {
    path: '/:target?',
    component: Target
  }
]

const router = new VueRouter({
  routes
})

export default router
