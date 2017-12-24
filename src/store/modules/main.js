import * as types from '../mutation-types'

const state = {
  loginInfo: {},
  isLogin: false
}

const getters = {
  loginInfoStatus: state => state.loginInfo,
  isLoginStatus: state => state.isLogin
}

const actions = {
}

const mutations = {
  [types.LOGIN_INFO] (state, loginInfo) {
    state.loginInfo = loginInfo
  },
  [types.IS_LOGIN] (state, isLogin) {
    state.isLogin = isLogin
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
