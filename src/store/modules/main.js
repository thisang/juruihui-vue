import * as types from '../mutation-types'

const state = {
  loginInfo: {}
}

const getters = {
}

const actions = {
}

const mutations = {
  [types.LOGIN_INFO] (state, loginInfo) {
    state.loginInfo = loginInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
