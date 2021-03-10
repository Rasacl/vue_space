import Vue from 'vue'
import VueRouter from 'vue-router'
import Shou from '../components/Shouye.vue'
import Family from '../components/Family.vue'
import All from '../components/All.vue'
import Cparents from '../views/Cparents.vue'
import Cchild from '../views/Cchild.vue'
import Cmarry from '../views/Cmarry.vue'

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
  },
  {
    path: '/all',
    component: All,
    children: [
      {
        path: '/cparents',
        component: Cparents
      },
      {
        path: '/cchild',
        component: Cchild
      },
      {
        path: '/cmarry',
        component: Cmarry
      }
    ]
  }
]
// 解决多次点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes
})

export default router
