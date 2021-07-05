import index from '@/views/index.vue'
export default [
    {
        path: '/',
        redirect: '/a',
        component: index,
        children: [
            {
              path: '/a',
              name: 'a',
              component: () => import('@/views/a.vue')
            },
        ]
    }
]