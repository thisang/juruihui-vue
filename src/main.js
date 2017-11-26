// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store/'
import App from './App'

import 'lib-flexible'
import '../node_modules/vux/src/styles/1px.less'
import '../node_modules/vux/src/styles/reset.less'
import '../src/common/reset.scss'
import '../src/common/common.scss'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
