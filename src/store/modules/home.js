import * as types from '../mutation-types'

const state = {
  currentCity: '武汉'
}

const getters = {
  currentCityStatus: stete => state.currentCity
}

const actions = {
  getCurrentCity ({commit, state}, params) {
    commit(types.CURRENT_CITY, params.city)
  }
}

const mutations = {
  [types.CURRENT_CITY] (state, currentCity) {
    state.currentCity = currentCity
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
