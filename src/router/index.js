import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../view/home/Home.vue';

const routes = [
    {
        path: '/',  // path是路径  
        redirect: '/home',  //重定向   如果访问/结尾，就重定向到/home页面去；   
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/commodity',
                name: 'commodity',

                component: () => import(/* webpackChunkName: "commodity" */ '../view/home/Commodity.vue')
            },
        ]
    },
    {
<<<<<<< HEAD
        path:'/login',
        component:()=> import( /* webpackChunkName:'food' */  '../view/login/Login.vue'),  
=======
        path: '/login',
        component: () => import( /* webpackChunkName:'food' */  '../view/login/Login.vue'),
        children: [{
            path: '/account',
            name: 'account',
            component: () => import( /* webpackChunkName:'account' */  '../view/login/Account.vue')
        }]
>>>>>>> 2e791a1a3dc6d4cf61fb0dd14c0db31ec4f3d31f
    }
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router;