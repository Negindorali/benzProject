import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from "axios"
import "@/assets/css/style.css"
import './assets/tailwind.css'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

Vue.use(VueCarousel)

export const Axios = axios.create({
  baseURL: '',
  timeout: 15000,
  headers: {
    Authorization:'Bearer ' + localStorage.getItem("user"),
    Accept: 'application/json',
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
  }
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
