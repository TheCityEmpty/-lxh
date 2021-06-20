import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
import NotFound from '@/components/base/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: routes[0].path },
        ...routes,
        { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
    ]
})

export default router
