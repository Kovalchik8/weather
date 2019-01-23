<template>
  <div>
    <Banner />
    <div class="container container--form">
      <form @submit.prevent="findFormSubmit" id="FormFind" action="">
        <input 
          ref="refInput"
          id="Input"
          type="text" 
          placeholder="Find your location..."
        >
        <button type="submit">Find</button>
      </form>

      <Board />
    </div>

    <Footer />
  </div>
  
</template>

<script>
import Board from '@/components/Board'
import Banner from '@/components/Banner'
import store from '@/store/store'
import Footer from '@/components/Footer'

function getWeather(routeTo, routeFrom, next) {
  let city = 'kiev'
  let latlng = {
    lat: 50,
    lng: 30,
    city: 'Kyiv'
  }
  store.dispatch('Weather/fetchWeather', latlng).then(() => {
    store.dispatch('Teleport/getImages', city).then(() => {
      next()
    })
  })
}

export default {
  components: {
    Board,
    Banner,
    Footer
  },
  data() {
    return {
      city: 'Kyiv',
      latLng: {
        lat: 0,
        lng: 0,
        city: 'Kyiv'
      },
      lastCity: '',
      notifiedAboutGoogle: false
    }
  },

  methods: {
    findFormSubmit() {
      if (!this.$refs.refInput.value.length) {
        let notification = {
          type: 'error',
          message: 'Input is required'
        }
        this.$store.dispatch('Notification/add', notification)
        return null
      }
      if (
        (this.latLng.lat == 0 && this.latLng.lng == 0) ||
        this.$refs.refInput.value != this.lastCity
      ) {
        let notification = {
          type: 'error',
          message: 'Invalid city name'
        }
        this.$store.dispatch('Notification/add', notification)
        return null
      }
      this.latLng.city = this.city
      this.$store.dispatch('Weather/fetchWeather', this.latLng)
      this.$store.dispatch('Teleport/getImages', this.city)
    }
  },
  mounted() {
    document.addEventListener(
      'DOMSubtreeModified',
      () => {
        if (!this.notifiedAboutGoogle) {
          var html = document.getElementsByTagName('html')[0]
          if (html.classList.contains('translated-ltr')) {
            let notification = {
              type: 'translator',
              message:
                'This website doesnt work properly with google translation. Please turn it off and try again'
            }
            this.$store.dispatch('Notification/add', notification)
            this.notifiedAboutGoogle = true
            return null
          }
        }
      },
      true
    )
    // eslint-disable-next-line no-undef
    var placesAutocomplete = places({
      appId: 'plPJSOUUL3KB',
      apiKey: 'de5ffc4416638b8e51302fb2b43ce502',
      container: document.querySelector('#Input'),
      templates: {
        value: function(suggestion) {
          let str = ''
          if (suggestion.administrative) str = ', ' + suggestion.administrative
          return suggestion.name + str + ', ' + suggestion.country
        }
      }
    }).configure({
      type: 'city',
      aroundLatLngViaIP: false,
      language: 'en'
      // useDeviceLocation: true
    })

    placesAutocomplete.on('change', e => {
      let str = ''
      if (e.suggestion.administrative) str = ', ' + e.suggestion.administrative
      this.lastCity = e.suggestion.name + str + ', ' + e.suggestion.country

      this.city = e.suggestion.name
      this.latLng.lat = e.suggestion.latlng.lat
      this.latLng.lng = e.suggestion.latlng.lng
    })
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getWeather(routeTo, routeFrom, next)
  }
}
</script>

<style lang="scss">
.container--form {
  position: relative;
  top: 50px;
  margin-bottom: 60px;
  @media (max-width: 767.98px) {
    top: 0;
    margin-bottom: 0;
  }
}
#FormFind {
  margin: 70px 0;
  position: relative;
  input {
    height: auto !important;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
    width: 100%;
    padding: 20px 120px 20px 20px;
    background: $colorBgDark;
    color: white;
    outline: none;
    border: none;
    border-radius: 30px;
  }
  button {
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    padding: 0 40px;
    border: none;
    background: #009ad8;
    border-radius: 30px;
    color: white;
    &:focus {
      outline: none;
    }
    &:disabled,
    &[disabled] {
      background-color: lightgray;
      cursor: not-allowed;
    }
  }
}
</style>
