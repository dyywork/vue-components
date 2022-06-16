import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from "../Layout/Layout";
import LayoutContainer from "../Layout/LayoutContainer";
import Home from "../views/Home";
import Layout from "../Layout/Layout";

Vue.use(VueRouter)


export const routes = [
    {
        path: "/index",
        component: Layout,
        meta: { title: 'form' },
        children: [
            {
                path: '/index',
                name: 'About',
                component: () => import('@docs/mgTable.md'),
                meta: { title: 'About' },
            },
            {
                path: '/mg-search-form',
                name: 'mgSearchForm',
                component: () => import('@docs/mgSearchForm.md'),
                meta: { title: 'mgSearchForm' },
            },
            {
                path: '/dyy-tooltip',
                name: 'dyyTooltip',
                component: () => import('@docs/dyyTooltip.md'),
                meta: { title: 'dyyTooltip' },
            },
        ]
    },
]

const routesCommon = [
    {
        path: "/",
        component: LayoutContainer,
        meta: { title: 'form' },
        children: [
            {
                path: '/',
                name: 'Home',
                component: Home,
                meta: { title: 'Home' },
            },
            ...routes
        ]
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes:routesCommon
})

export default router
