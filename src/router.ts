import Home from './views/Home.vue'
import { createRouter, createWebHashHistory } from 'vue-router'	
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/home', component: Home },
    { path: '/', redirect: '/home' }
  ],
})