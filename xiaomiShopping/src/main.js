// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'; //引入store
// 引入饿了么移动端组件库
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
// 引入Vue 2.0 的桌面端组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(ElementUI);
Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //挂载store
  components: {
    App
  },
  template: '<App/>'
})
