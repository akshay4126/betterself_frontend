import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'

import VModal from 'vue-js-modal/dist/ssr.index'
Vue.use(VModal);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import Meta from 'vue-meta'
Vue.use(Meta)

import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)

import {SimpleSVG} from 'vue-simple-svg'
Vue.component('simple-svg', SimpleSVG)



// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
    // create store and router instances
    const store = createStore();
    const router = createRouter();

    // sync the router with the vuex store.
    // this registers `store.state.route`
    sync(store, router);

    // create the app instance.
    // here we inject the router, store and ssr context to all child components,
    // making them available everywhere as `this.$router` and `this.$store`.
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });

    // expose the app, the router and the store.
    // note we are not mounting the app here, since bootstrapping will be
    // different depending on whether we are in a browser or on the server.
    return { app, router, store }
}

