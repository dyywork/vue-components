import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'github-markdown-css'
import MgComponents from "../package/components/index.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/highLight.css'
import 'highlight.js/styles/atom-one-dark.css'
import '@src/style/index.scss'
// import 'highlight.js/lib/common';
// import vuePlugin from "@highlightjs/vue-plugin";
import VueHighlightJS from 'vue-highlight.js';
import 'vue-highlight.js/lib/allLanguages'
// Highlight.js languages (Only required languages)
// import dyyVueComponents from "dyy-vue-components";
// import 'dyy-vue-components/lib/vueComponents.css'
import 'prismjs'
import HelloWorld from "./components/HelloWorld";

Vue.component('HelloWorld')

Vue.config.productionTip = false
Vue.use(VueHighlightJS);
Vue.use(MgComponents)
Vue.use(ElementUI)
// Vue.use(vuePlugin);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
