// router.ts
import { createRouter, createWebHashHistory } from 'vue-router'

import Launch from './views/Launch.vue'
import Resources from './views/Resources.vue'
import Network from './views/Network.vue'
import Settings from './views/Settings.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/launch', component: Launch },
        { path: '/resources', component: Resources },
        { path: '/network', component: Network },
        { path: '/settings', component: Settings },
        { path: '/', redirect: '/launch' }
    ],
})