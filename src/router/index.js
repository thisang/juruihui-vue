import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import CityList from '@/pages/cityList/CityList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cityList',
      name: 'CityList',
      component: CityList
    }
  ]
})
