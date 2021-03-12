import Vue from 'vue'
import VueRouter from 'vue-router'
import Shou from '../components/Shouye.vue'
import Family from '../components/Family.vue'
import All from '../components/All.vue'
import Cparents from '../views/Cparents.vue'
import Cchild from '../views/Cchild.vue'
import Cmarry from '../views/Cmarry.vue'
import School from '../components/School.vue'
import AllSchool from '../components/AllSchool.vue'
import Teacher from '../views/Teacher.vue'
import Students from '../views/Students.vue'
import Job from '../components/Job.vue'
import AllJob from '../components/AllJob.vue'
import Fersh from '../views/Fersh.vue'
import Senior from '../views/Senior.vue'
import Tree from '../components/Tree.vue'
import FragFind from '../components/FragFind.vue'
import FragNum from '../components/FragNum.vue'
import FragFinded from '../components/FragFinded.vue'
import FragYour from '../components/FragYour.vue'

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
  },
  {
    path: '/school',
    component: School
  },
  {
    path: '/allschool',
    component: AllSchool,
    children: [
      {
        path: '/teacher',
        component: Teacher
      },
      {
        path: '/students',
        component: Students
      }
    ]
  },
  {
    path: '/job',
    component: Job
  },
  {
    path: '/alljob',
    component: AllJob,
    children: [
      {
        path: '/fersh',
        component: Fersh
      },
      {
        path: '/senior',
        component: Senior
      }
    ]
  },
  {
    path: '/tree',
    component: Tree
  },
  {
    path: '/fragfind',
    component: FragFind
  },
  {
    path: '/fragnum',
    component: FragNum
  },
  {
    path: '/fragfinded',
    component: FragFinded
  },
  {
    path: '/fragyour',
    component: FragYour
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
