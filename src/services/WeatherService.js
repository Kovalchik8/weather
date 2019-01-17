import axios from 'axios'

const apiKey = 'aa43b9a3f7eb929f5971966610d657b0'

const apiClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

export default {
  getWeather(city) {
    return apiClient.get(
      'forecast?units=metric&cnt=7&q=' + city + '&APPID=' + apiKey
    )
  }
}
