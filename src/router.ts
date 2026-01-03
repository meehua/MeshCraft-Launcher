import Launch from './views/Launch.vue'
import { createRouter, createWebHashHistory } from 'vue-router'	
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/launch', component: Launch },
    { path: '/', redirect: '/launch' }
  ],
})