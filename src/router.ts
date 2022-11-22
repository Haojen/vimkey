import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import { currentPageState } from '@/refs'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
        path: '/support',
        name: 'Support',
        component: () => import(/* webpackChunkName: "support" */ './views/Support.vue')
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import(/* webpackChunkName: "support" */  './views/Privacy.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

router.beforeEach((to) => {
    currentPageState.value = to.name as 'Home' | 'Privacy' | 'Support'
})

export default router
