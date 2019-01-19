import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/list'
    }, {
      path: '/list/:type',
      component: List
    }, {
      path: '/login',
      component: Login
    }
  ]
})
