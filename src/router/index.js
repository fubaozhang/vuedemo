import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import test from '@/components/test'
import login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/day01',
      name: 'test',
      component: test
    }
  ]
})
