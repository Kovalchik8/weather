import Vue from 'vue'
import Vuex from 'vuex'
import * as Weather from '@/store/modules/Weather'
import * as Icons from '@/store/modules/Icons'
import * as Teleport from '@/store/modules/Teleport'
import * as Notification from '@/store/modules/Notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Weather,
    Icons,
    Notification,
    Teleport
  },
  state: {},
  mutations: {},
  actions: {}
})
