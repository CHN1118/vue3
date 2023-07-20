// 管理路由
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// 导入 layout
import layout from '@/views/layout/index.vue'
let router = createRouter({
    // 设置路由模式
    history: createWebHashHistory(),
    // 设置路由对象
    routes: [
        { path: '/', redirect: '/layout' },
        {
            path: '/layout', component: layout,
            children: [
                { path: '/layout', redirect: '/layout/home', },
                { path: 'home', component: () => import('@/views/home/index.vue') },
            ]
        },
    ]
})
// 暴露路由对象
export default router