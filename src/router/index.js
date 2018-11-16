import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import test from '@/components/test'
import login from '@/components/Login'
import Home from '@/components/Home'
import Table from '@/views/Table'
import Main from '@/components/Main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login,
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '菜单列表',
      iconCls: 'el-icon-menu',//图标样式class
      children: [
          { path: '/main', component: Main, name: '主页', hidden: true },
          { path: '/table', component: Table, name: '菜鸟菜单',iconCls: 'el-icon-caret-right' },
          /* { path: '/form', component: Form, name: 'Form' }, */
         /*  { path: '/user', component: user, name: '列表' }, */
      ]
    },
    {
      path: '/day01',
      name: 'test',
      component: test,
      hidden: true
    }
  ]
})
