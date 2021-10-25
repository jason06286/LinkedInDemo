import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Feed from '@/views/Feed.vue';
import Network from '@/views/Network.vue';
import Jobs from '@/views/Jobs.vue';
import Chat from '@/views/Chat.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/feed',
        name: 'Feed',
        component: Feed,
    },
    {
        path: '/network',
        name: 'Network',
        component: Network,
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs,
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat,
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;