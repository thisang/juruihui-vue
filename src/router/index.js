import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import Find from '@/pages/find/Find'
import Publish from '@/pages/publish/Publish'
import Message from '@/pages/message/Message'
import Mine from '@/pages/mine/Mine'

import CityList from '@/pages/cityList/CityList'
import MessageList from '@/pages/messageList/MessageList'
import Setting from '@/pages/setting/Setting'
import SetNotice from '@/pages/setNotice/SetNotice'
import Feedback from '@/pages/feedback/Feedback'
import Account from '@/pages/account/Account'
import ActivitiList from '@/pages/activitiList/ActivitiList'
import ActivitiDetail from '@/pages/activitiDetail/ActivitiDetail'

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
        },
        {
          path: '/index/find',
          name: 'Find',
          component: Find
        },
        {
          path: '/index/publish',
          name: 'Publish',
          component: Publish
        },
        {
          path: '/index/message',
          name: 'Message',
          component: Message
        },
        {
          path: '/index/mine',
          name: 'Mine',
          component: Mine
        }
      ]
    },
    {
      path: '/cityList',
      name: 'CityList',
      component: CityList
    },
    {
      path: '/index/message/messageList',
      name: 'MessageList',
      component: MessageList
    },
    {
      path: '/index/mine/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/index/mine/setting/setNotice',
      name: 'SetNotice',
      component: SetNotice
    },
    {
      path: '/index/mine/setting/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/index/mine/setting/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/activitiList',
      name: 'ActivitiList',
      component: ActivitiList
    },
    {
      path: '/activitiDetail',
      name: 'ActivitiDetail',
      component: ActivitiDetail
    }
  ]
})
