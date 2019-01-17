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
  fetchWeather({ commit }, city) {
    return WeatherService.getWeather(city)
      .then(response => {
        commit('SET_WEATHER', response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
}
