import VueRouter from 'vue-router'

// Access components
import Access from '@/Access'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// Mapper components
import Mapper from '@/Mapper'
import Home from '@/pages/Home'
import Targets from '@/pages/Targets'
import Target from '@/pages/Target'
import NotFound from '@/pages/NotFound'

const mode = 'history'

const routes = [
  {
    path: '/mapper',
    component: Access,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'register',
        name: 'register',
        component: Register
      }
    ]
  },
  {
    path: '/mapper',
    component: Mapper,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'targets',
        name: 'targets',
        component: Targets
      },
      {
        path: '*',
        name: 'not-found',
        component: NotFound
      }
    ]
  },
  {
    path: '/:target?',
    component: Target
  }
]

const router = new VueRouter({
  mode,
  routes
})

export default router
