import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"

// 可以忽略，生产环境时候是否有提示
Vue.config.productionTip = false
// 把axios挂载到vue的原型
Vue.prototype.$axios = axios;
// 设置基准路径
axios.defaults.baseURL = "http://localhost:3000";

// 注册element插件
Vue.use(ElementUI);

// $mount吧根实例挂载到指定的节点中，相当于el
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
