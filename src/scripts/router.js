import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";

Vue.use(Router);

const routes = [    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            description: ""
        }
    },
    {
        path: "/about",
        name: "Login",
        component: Login,
        meta: {
            description: ""
        }
    }
];

export default new Router({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    linkActiveClass: "is-active",
    linkExactActiveClass: "is-exact-active",
    routes
});
