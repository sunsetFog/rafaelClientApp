export default [
    { path: '/:pathMatch(.*)*', name: 'error404', meta: { title: '找不到该页' }, component: () => import('@/views/404.vue') },
    { path: '/', name: 'defaultPath', meta: { title: '默认路由' }, component: () => import('@/views/defaultPath') }
]
