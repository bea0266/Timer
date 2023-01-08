import { createWebHistory, createRouter } from "vue-router";

import Main from '@/view/Main.vue'
import Timer from '@/view/Timer.vue'
import DashBoard from '@/view/DashBoard.vue'

const routes = [
    {
        path: '/main',
        name: 'Main',
        component: Main,
    },

    {
        path: '/timer',
        name: 'timer',
        component: Timer,
    },

    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard,
    },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router



