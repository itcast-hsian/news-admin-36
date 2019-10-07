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

// 路由守卫
router.beforeEach((to, from, next) => {

  // 如果不是登录页，都必须判断是否有token
  if(to.path !== "/login"){

    // 是否有token
    const token = JSON.parse(localStorage.getItem("user") || `{}`).token;

    if(token){
      // 正常跳转
      next()
    }else{
      next("/login")
    }
  }else{
    // 访问的是登录页
    next();
  }
})

// 注册element插件
Vue.use(ElementUI);

// $mount吧根实例挂载到指定的节点中，相当于el
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
