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

export const guideRouter = [
  {
    path: "/guide",
    name: "Guide",
    redirect: "/guide/about",
    component: () => import("@src/views/Guide.vue"),
    meta: { title: "指南" },
    children: [
      {
        path: "/guide/about",
        name: "About",
        component: () => import("@docs/install.md"),
        meta: { title: "安装" },
      },
      {
        path: "/guide/introduce",
        name: "Introduce",
        component: () => import("@docs/introduce.md"),
        meta: { title: "介绍" },
      }
    ]
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
      ...guideRouter,
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
