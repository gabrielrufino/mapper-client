import VueRouter from 'vue-router'

import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Targets from '@/pages/Targets'

const routes = [
  {
    path: '/mapper/',
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
    path: '/:target',
    component: "<h1>Nothing for while</h1>"
  }
]

const router = new VueRouter({
  routes
})

export default router
