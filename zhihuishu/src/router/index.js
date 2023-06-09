//配置路由
// history模式
import { createRouter, createWebHistory } from "vue-router";

import home from "@/view/Home.vue";
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name:"home",
        component:home,
    },
    {
        path:'/courseResource',
        name:'courseResource',
        component:()=>import('@/view/Course.vue')
    },
    {
        path:'/live',
        name:'live',
        component:()=>import('@/view/LiveCourse.vue')
    }
];

// 创建路由对象
const router = createRouter({
    // mode:'history',
    history: createWebHistory(),
    routes,
});

export default router;
