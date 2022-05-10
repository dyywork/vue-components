import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../Layout/Layout";
import Home from "../views/Home";

Vue.use(VueRouter)

export const routes = [
    {
        path: "/",
        name: 'Layout',
        component: Layout,
        meta: { title: 'form' },
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
                meta: { title: 'Home' },
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@src/views/About.vue'),
                meta: { title: 'About' },
            },
            {
                path: '/mg-search-form',
                name: 'mgSearchForm',
                component: () => import('@docs/mgSearchForm.md'),
                meta: { title: 'mgSearchForm' },
            },
        ]
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
