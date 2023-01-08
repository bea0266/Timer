import { createWebHistory, createRouter } from "vue-router";

import Main from '@/view/Main.vue'
import Timer from '@/view/Timer.vue'


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
  
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router



