// Library
import { createRouter, createWebHistory } from 'vue-router';

// Types
import type { RouteRecordRaw, Router } from 'vue-router';

// Local files
import TestPage from '@/components/TestPage.vue';

// Build various paths using router
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'TestPage',
        component: TestPage
    },
    // Catch all for 404 Not Found
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: TestPage
    }
]

// Extend default router to capture web history
const router: Router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
