import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'github-markdown-css'
import MgComponents from "../package/components/index.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/atom-one-dark.css'
import '@src/style/index.scss'
import DyyAnchor from './components/DyyAnchor.vue'
import DyyTitle from './components/DyyTitle.vue'
import directives from './directive/index'
Vue.use(directives)
// import dyyVueComponents from "dyy-vue-components";
// import 'dyy-vue-components/lib/vueComponents.css'
import 'prismjs'

Vue.config.productionTip = false
Vue.component('dyy-anchor', DyyAnchor)
Vue.component('dyy-title', DyyTitle)
Vue.use(MgComponents)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
