import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 可以忽略，生产环境时候是否有提示
Vue.config.productionTip = false

// $mount吧根实例挂载到指定的节点中，相当于el
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
