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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
