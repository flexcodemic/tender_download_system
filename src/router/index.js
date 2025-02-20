import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/: pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;