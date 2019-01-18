import TeleportService from '@/services/TeleportService'

export const namespaced = true

export const state = {
  images: {
    web: '',
    mobile: ''
  }
}

export const mutations = {
  SET_IMAGES(state, images) {
    state.images = images
  }
}

export const actions = {
  getImages({ commit }, city) {
    return TeleportService.getImages(city)
      .then(response => {
        commit('SET_IMAGES', response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
