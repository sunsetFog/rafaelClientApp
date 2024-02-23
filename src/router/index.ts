// @ts-nocheck
'use sloppy'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FirstRouter from './modules/firstRouter.js';


// import HomeView from '../views/HomeView.vue'
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: FirstRouter,
})

// 路由拦截
router.beforeEach((to, from, next) => {
    if (from.path == '/' && to.path != '/login') {
        // if (VueCookies.get(process.env.VUE_APP_TOKEN_KEY)) {
        //     store.dispatch('routerApple').then(function (value) {
        //         for (let i = 0; i < value.length; i++) {
        //             const item = value[i];
        //             router.addRoute(item);
        //         }
        //         console.log('--then结束-2-', router.getRoutes());
        //         next();
        //     });
        // } else {
            next({ path: '/login' });
        // }
    } else {
        next();
    }
});
// 路由结束时
router.afterEach((to, from) => {

});


export default router
