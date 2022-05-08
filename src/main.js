import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'github-markdown-css'
import MgComponents from "../components/index.js";

Vue.config.productionTip = false
Vue.use(MgComponents)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
