import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'github-markdown-css'
import MgComponents from "../components/index.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'highlight.js/styles/atom-one-dark.css'
import '@src/style/index.scss'


Vue.config.productionTip = false
Vue.use(MgComponents)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
