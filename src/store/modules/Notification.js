export const namespaced = true

export const state = {
  notifications: []
}

let newId = 1

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: newId++
    })
  },
  DELETE(state, notification) {
    state.notifications = state.notifications.filter(item => {
      item.id !== notification.id
    })
  }
}

export const actions = {
  add({ commit }, text) {
    commit('PUSH', text)
  },
  delete({ commit }, item) {
    commit('DELETE', item.id)
  }
}
