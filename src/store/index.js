import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters: {
    // eslint-disable-next-line space-before-function-paren
    doubleCity(state) {
      return state.city + 'ludan'
    }
  }
})
