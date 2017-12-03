import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import CityList from '@/pages/cityList/CityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: {name: 'Home'},
      children: [
        {
          path: '/index/home',
          name: 'Home',
          component: Home
        }
      ]
    },
    {
      path: '/cityList',
      name: 'CityList',
      component: CityList
    }
  ]
})
