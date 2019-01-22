<template>
  <div class="board-item">
    <div class="board-item__header">{{time}}</div>
    <div class="board-item__body">
      <i :class="icon"></i>
      <div class="board-item__temperature">{{temperatureInt}}<sup>o</sup>C</div>
      <div class="board-item__wind">
        <img src="../assets/images/icons/wind.svg" alt="">
        <span>{{ wind }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    weather: {
      type: Object,
      required: true
    }
  },
  computed: {
    icon() {
      var prefix = 'wi wi-'
      var code = this.weather.weather[0].id
      var icon = this.Icons.icons[code].icon
      if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = 'day-' + icon
      }
      icon = prefix + icon
      return icon
    },
    imageSrc() {
      let icon = this.weather.weather[0].icon
      return 'http://openweathermap.org/img/w/' + icon + '.png'
    },
    time() {
      let arr = this.weather.dt_txt
      arr = arr.split(' ')
      return arr[1].substring(0, arr[1].length - 3)
    },
    temperatureInt() {
      return parseInt(this.weather.main.temp)
    },
    wind() {
      return this.weather.wind.speed
    },
    ...mapState(['Icons'])
  }
}
</script>

<style lang="scss">
.board-item {
  color: #bfc1c8;
  height: 100%;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  &__header {
    padding: 10px;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    font-size: 14px;
  }
  &__body {
    height: calc(100% - 40px);
    padding: 50px 30px 10px;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    i {
      color: $colorBlue;
      transform: scale(2);
    }
  }

  &__temperature {
    text-align: center;
    color: white;
    font-size: 1.2rem;
    margin-top: 25px;
  }
  &__wind {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-bottom: 3px;
      display: inline-block;
      width: 15px;
    }
  }
}
</style>
