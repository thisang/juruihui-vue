import * as types from './mutation-types.js'

export default {
  [types.CURRENT_CITY] (state, currentCity) {
    state.currentCity = currentCity
  }
}
