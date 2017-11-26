import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  currentCity: '' // 当前城市
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
