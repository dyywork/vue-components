import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "github-markdown-css";
import DUI from "../package/components/index.js";
// import DUI from "../lib/DUI.umd.js";
// import "../lib/index.css";
console.log(DUI);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import "highlight.js/styles/atom-one-dark.css";
import "@src/style/index.scss";
import DyyAnchor from "./components/DyyAnchor.vue";
import DyyTitle from "./components/DyyTitle.vue";
import DyyCode from "./components/dyyCode/dyyCode.vue";
import directives from "./directive/index";
Vue.use(directives);

import "prismjs";
import dayjs from "dayjs";
import mockjs from "mockjs";

Vue.config.productionTip = false;
Vue.component("dyy-anchor", DyyAnchor);
Vue.component("dyy-title", DyyTitle);
Vue.component("dyy-code", DyyCode);
Vue.use(DUI, { dayjs: dayjs, mock: mockjs.mock });
Vue.use(ElementUI);
Vue.use(VXETable)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
