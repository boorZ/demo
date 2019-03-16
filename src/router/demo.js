import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld'
import Index from '../demo/index'
import UserCenter from '../demo/userCenter'
import UserInfo from '../demo/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter,
      children: [
        {
          path: 'userInfo',
          name: 'userInfo',
          component: UserInfo
        }
      ]
    }
  ]
})
