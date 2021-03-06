import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import home from './modules/home'
import main from './modules/main'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    home,
    main
  }
})
