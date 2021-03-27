import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/signup',
      name: 'signup',
      component: signup
    }
  ]
})
