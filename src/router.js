import Vue from 'vue'
import Router from 'vue-router'
import Message from './views/Message.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/messages'
    }, {
      path: '/messages',
      component: Message
    }, {
      path: '/login',
      component: Login
    }
  ]
})
