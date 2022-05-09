import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../Layout/Layout";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/mg-search-form',
        name: 'mgSearchForm',
        component: () => import(/* webpackChunkName: "about" */ '@docs/mgSearchForm.md')
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
