import Vue from 'vue'
import Vuex from 'vuex'
import * as Weather from '@/store/modules/Weather'
import * as Icons from '@/store/modules/Icons'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Weather,
    Icons
  },
  state: {},
  mutations: {},
  actions: {}
})
