<template>
  <div>
    <Banner />
    <div class="container container--form">
      <form @submit.prevent="findFormSubmit" id="FormFind" action="">
        <input 
          v-model="city"  
          type="text" 
          placeholder="Find your location..."
          @blur="$v.city.$touch()"
          :class="{'error' : $v.city.$error}"
        >
        <button :disabled="$v.city.$error" type="submit">Find</button>
      </form>

      <Board />

    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Board from '@/components/Board'
import Banner from '@/components/Banner'
import store from '@/store/store'

function getWeather(routeTo, routeFrom, next) {
  let city = 'kiev'
  store.dispatch('Weather/fetchWeather', city).then(() => {
    store.dispatch('Teleport/getImages', city).then(() => {
      next()
    })
  })
}

export default {
  components: {
    Board,
    Banner
  },
  data() {
    return {
      city: 'kiev'
    }
  },
  validations: {
    city: { required }
  },
  methods: {
    findFormSubmit() {
      this.$v.city.$touch()
      if (!this.$v.city.$error) {
        this.$store.dispatch('Weather/fetchWeather', this.city)
        this.$store.dispatch('Teleport/getImages', this.city)
      }
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getWeather(routeTo, routeFrom, next)
  }
}
</script>

<style lang="scss">
.container--form {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 60px;
  @media (max-width: 767.98px) {
    top: 175px;
  }
}
#FormFind {
  margin: 70px 0;
  position: relative;
  input {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
    width: 100%;
    padding: 20px 50px 20px 20px;
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
