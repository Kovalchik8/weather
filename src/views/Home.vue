<template>
  
  <div class="container">
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
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import Board from '@/components/Board'
import store from '@/store/store'

function getWeather(routeTo, routeFrom, next) {
  let city = 'Kiev'
  store.dispatch('Weather/fetchWeather', city).then(() => {
    next()
  })
}

export default {
  components: {
    Board
  },
  data() {
    return {
      city: ''
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
      }
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getWeather(routeTo, routeFrom, next)
  }
}
</script>

<style lang="scss">
#FormFind {
  margin: 70px 0;
  position: relative;
  input {
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
