import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/modules/login/Login';
import Timeline from '@/modules/timeline/Timeline';

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/',
            name: 'timeline',
            component: Timeline,
        }
    ]
})
