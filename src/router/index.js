import Vue from "vue";
import VueRouter from "vue-router";
// import Layout from "../Layout/Layout";
import LayoutContainer from "../Layout/LayoutContainer";
import Home from "../views/Home";
import Layout from "../Layout/Layout";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/components",
    redirect: "/components/table",
    component: Layout,
    meta: { title: "form" },
    children: [
      {
        path: "/components/table",
        name: "Table",
        component: () => import("@docs/dyyTable.md"),
        meta: { title: "Table-表格" },
      },
      {
        path: "/components/search-form",
        name: "mgSearchForm",
        component: () => import("@docs/dyySearchForm.md"),
        meta: { title: "searchForm-搜索表单" },
      },
      {
        path: "/components/dyy-tooltip",
        name: "dyyTooltip",
        component: () => import("@docs/dyyTooltip.md"),
        meta: { title: "dyyTooltip" },
      },
    ],
  },
];

const routesCommon = [
  {
    path: "/",
    component: LayoutContainer,
    redirect: "/home",
    meta: { title: "form" },
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
        meta: { title: "Home" },
      },
      {
        path: "/guide",
        name: "Guide",
        component: () => import("@src/views/Guide.vue"),
        meta: { title: "指南" },
      },
      ...routes,
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: routesCommon,
});

export default router;
