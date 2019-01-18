import Vue from 'vue'
import Vuex from 'vuex'
import * as Weather from '@/store/modules/Weather'
import * as Icons from '@/store/modules/Icons'
import * as Teleport from '@/store/modules/Teleport'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Weather,
    Icons,
    Teleport
  },
  state: {},
  mutations: {},
  actions: {}
})
