/*
* 路由器对象模块
* */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'

// 声明使用插件
Vue.use(VueRouter)

// 配置所有路由
export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    // 配置一个默认路由跳转到首页
    {
      path: '/',
      component: Msite
    },

  ]
})
