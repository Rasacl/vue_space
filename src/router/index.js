import Vue from 'vue'
import VueRouter from 'vue-router'
import Shou from '../components/Shouye.vue'
import Family from '../components/Family.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/shou'
  },
  {
    path: '/shou',
    component: Shou
  },
  {
    path: '/family',
    component: Family
  }
]

const router = new VueRouter({
  routes
})

export default router
