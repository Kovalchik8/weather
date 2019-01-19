import WeatherService from '@/services/WeatherService'

export const namespaced = true

export const state = {
  weather: []
}

export const mutations = {
  SET_WEATHER(state, weather) {
    state.weather = weather
  }
}

export const actions = {
  fetchWeather({ commit, dispatch }, latLng) {
    return WeatherService.getWeather(latLng)
      .then(response => {
        commit('SET_WEATHER', response.data)
        dispatch('setCity', latLng.city, {
          root: true
        })
      })
      .catch(error => {
        console.log(error.response)
        var message = error.message
        if (error.response && error.response.status == 404) {
          message = 'Error: Please check spelling and try again'
        }
        var notification = {
          type: 'error',
          message: message
        }
        dispatch('Notification/add', notification, {
          root: true
        })
      })
  }
}
