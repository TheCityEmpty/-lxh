import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/user'
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('./views/user/index.vue')
    },
    {
        path: '/config',
        name: 'config',
        component: () => import('./views/config/index.vue')
    },
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router