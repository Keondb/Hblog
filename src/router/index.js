import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "layout",
    component: () =>
        import ("../views/layout/layout.vue"),
    children: [{
            //默认选中第一个
            path: "/",
            name: "Index",
            component: index,
        },
        {
            path: "about",
            name: "About",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "../views/About.vue")
        },
        {
            path: "Home",
            name: "Home",
            component: () =>
                import ( /* webpackChunkName: "Home" */ "../views/Home.vue")
        }
    ],
    meta: {
        title: '发展历史'
    }

}];

const router = new VueRouter({
    routes
});

export default router;