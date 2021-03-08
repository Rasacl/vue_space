import Vue from 'vue'
import VueRouter from 'vue-router'
import Shou from '../components/Shouye.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/shou'
  },
  {
    path: '/shou',
    component: Shou
  }
]

const router = new VueRouter({
  routes
})

export default router
