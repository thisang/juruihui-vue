import * as types from '../mutation-types'

const state = {
  currentCity: null
}

const getters = {
  // currentCityStatus: state => state.currentCity
}

const actions = {
  getCurrentCity ({commit, state}) {
    if (window.remote_ip_info) {
      console.log(window.remote_ip_info)
      commit(types.CURRENT_CITY, window.remote_ip_info)
      return
    }
    console.warn('没有获取到当前位置信息')
  },
  setCurrentCity ({commit, state}, cityInfo) {
    if (cityInfo.city) {
      commit(types.CURRENT_CITY, cityInfo)
      return
    }
    console.warn('设置城市信息出错')
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
