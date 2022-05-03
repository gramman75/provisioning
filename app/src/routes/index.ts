import {createRouter, createWebHistory} from 'vue-router';
import Newview from '@/views/NewsView.vue';
import JobsView from '@/views/JobsView.vue';
import AskView from '@/views/AskView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';


const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect : '/news'
        },
        {
            path:'/news',
            name: 'news',
            component: Newview,
        },
        {
            path:'/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path:'/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView,
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemView,
        }

    ]
});

export default router;