import { createRouter, createWebHistory } from 'vue-router';
import SNSApp from './SNSApp.vue';

import FilemanagementFileManager from "./components/listers/FilemanagementFileCards.vue"
import FilemanagementFileDetail from "./components/listers/FilemanagementFileDetail.vue"


const routes = [
            {
                path: '/',
                name: 'SNSApp',
                component: SNSApp
            },
            {
                path: '/filemanagements/files',
                name: 'FilemanagementFileManager',
                component: FilemanagementFileManager
            },
            {
                path: '/filemanagements/files/:id',
                name: 'FilemanagementFileDetail',
                component: FilemanagementFileDetail
            },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
