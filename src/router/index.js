import Vue from 'vue'
import Router from 'vue-router'

const Landing = () => import('../modules/landing/index.vue');
const About = () => import('../modules/About/index.vue');

Vue.use(Router);

export function createRouter () {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior(to, from, savedPosition) {
            if (to.hash) {
                return { selector: to.hash }
            } else if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 0 }
            }
        },
        routes: [
            {
                path: '',
                name: 'home',
                component: Landing
            },
            {
                path: '/about',
                name: 'about',
                component: About
            }
        ]
    })
}