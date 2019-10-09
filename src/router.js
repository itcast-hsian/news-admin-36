import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/views/Login"
import Index from "@/views/Index"
import PostList from "@/views/PostList";
import PostAdd from "@/views/PostAdd";
import PostEdit from "@/views/PostEdit";

// 注册路由插件
Vue.use(Router)

// 创建路由对象
export default new Router({
  // 可忽略，默认的声明, 主要是带#号和不带#号的区别，没有好坏之分
  mode: 'history',
  // 可忽略
  base: process.env.BASE_URL,
  // 路由的配置
  routes: [
    // 登录页
    { path: "/login", component: Login},

    // 后台首页
    { 
      path: "/", 
      component: Index, 
      meta: "首页",
      children: [
        { path: "post_list", component: PostList, meta: "文章列表",},
        { path: "post_add", component: PostAdd,  meta: "发布文章",},
        { path: "post_edit/:id", component: PostEdit,  meta: "编辑文章",}
      ]}
  ]
})
