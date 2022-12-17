import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/home',
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {transition: 'slide-left'},
        component: () => import("../views/pages/mainPage")
      },
      {
        path: "/refill",
        name: "refill",
        meta: {transition: 'slide-left'},
        component: () => import("../views/pages/refill/refillCars")
      },
      {
        path: "/emergency/aid",
        name: "emergencyAid",
        meta: {transition: 'slide-left'},
        component: () => import("../views/pages/Emergency aid/EmergencyAid")
      },
      {
        path: "/onsite/service",
        name: "siteService",
        meta: {transition: 'slide-left'},
        component: () => import("../views/pages/On-siteService/on-siteService")
      },
      {
        path: "/repair/service",
        name: "repairService",
        meta: {transition: 'slide-left'},
        component: () => import("../views/pages/repairService/repairService")
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
