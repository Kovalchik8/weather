import axios from 'axios'

const teleportClient = axios.create({
  baseURL: 'https://api.teleport.org/api/urban_areas',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

export default {
  getImages(city) {
    return teleportClient.get('/slug:' + city.toLowerCase() + '/images/')
  }
}
