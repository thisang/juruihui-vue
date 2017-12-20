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
import PublishActiviti from '@/pages/publishActiviti/PublishActiviti'
import PersonalInformation from '@/pages/personalInformation/PersonalInformation'
import MyFootPoint from '@/pages/myFootPoint/MyFootPoint'
import AllVoucher from '@/pages/allVoucher/AllVoucher'
import WaitForJoin from '@/pages/waitForJoin/WaitForJoin'
import Joined from '@/pages/joined/Joined'
import Like from '@/pages/like/Like'
import ToPay from '@/pages/toPay/ToPay'

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
    },
    {
      path: '/publishActiviti',
      name: 'PublishActiviti',
      component: PublishActiviti
    },
    {
      path: '/personalInformation',
      name: 'PersonalInformation',
      component: PersonalInformation
    },
    {
      path: '/myFootPoint',
      name: 'MyFootPoint',
      component: MyFootPoint
    },
    {
      path: '/allVoucher',
      name: 'AllVoucher',
      component: AllVoucher
    },
    {
      path: '/waitForJoin',
      name: 'WaitForJoin',
      component: WaitForJoin
    },
    {
      path: '/joined',
      name: 'Joined',
      component: Joined
    },
    {
      path: '/like',
      name: 'Like',
      component: Like
    },
    {
      path: '/toPay',
      name: 'ToPay',
      component: ToPay
    }
  ]
})
