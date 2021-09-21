import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/main',
    children: [{
      name: 'main',
      path: 'main',
      component: () => import('../components/Main.vue')
    },
    {
      name: 'result',
      path: 'result',
      component: () => import('../components/Result.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
