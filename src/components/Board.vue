<template>
  <div class="board-wrapper">
    <div id="board">
      <div class="board-main">
        <div class="board-main__header">
          <div class="board-main__day">{{currentDate[0]}}</div>
          <div class="board-main-date">{{currentDate[1]}}</div>
        </div>

        <div class="board-main__body">
          <div class="board-main__city">
            {{city}}
            <span class="board-main__country">({{ country }})</span>
          </div>
          <div class="board-main__temperature">
            <div class="num">
              {{temperatureInt}}
              <sup>o</sup>C
            </div>
            <i :class="icon" class="animated"></i>
          </div>

          <div class="board-main__features">
            <div class="board-main__precipitation">
              <img src="../assets/images/icons/humidity.svg" alt srcset>
              <span>{{humidity}}%</span>
            </div>
            <div class="board-main__wind">
              <img src="../assets/images/icons/wind.svg" alt srcset>
              <span>{{wind}} m/sec</span>
            </div>
            <div class="board-main__humidity">
              <img src="../assets/images/icons/pressure.svg" alt srcset>
              <span>{{pressure}} hPa</span>
            </div>
          </div>
        </div>
      </div>

      <BoardItem v-for="(item, index) in followingWeather" :key="index" :weather="item"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardItem from '@/components/BoardItem'
export default {
  components: {
    BoardItem
  },

  computed: {
    currentDate() {
      var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }
      let date = new Date().toLocaleTimeString('en-us', options)
      return date.split(', ')
    },
    icon() {
      var prefix = 'wi wi-'
      var code = this.Weather.weather.list[0].weather[0].id
      var icon = this.Icons.icons[code].icon
      if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = 'day-' + icon
      }
      icon = prefix + icon
      return icon
    },
    temperatureInt() {
      return parseInt(this.Weather.weather.list[0].main.temp)
    },
    country() {
      return this.Weather.weather.city.country
    },
    humidity() {
      return this.Weather.weather.list[0].main.humidity
    },
    wind() {
      return this.Weather.weather.list[0].wind.speed
    },
    desc() {
      return this.Weather.weather.list[0].weather[0].main
    },
    pressure() {
      return this.Weather.weather.list[0].main.pressure
    },
    followingWeather() {
      let arr = this.Weather.weather.list.slice(1)
      return arr
    },

    ...mapState(['city', 'Weather', 'Icons'])
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch('setLoader', false)
      document.getElementsByTagName('BODY')[0].style.overflowY = 'scroll'
    }, 1500)
  }
}
</script>

<style lang="scss">
@import '../assets/css/weather-icons.min.css';
@keyframes animated {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(0px);
  }
}
.board-wrapper {
  display: flex;
  justify-content: center;
}
.board-item:nth-child(2n) {
  background: rgba(0, 0, 0, 0.2);
}
#board {
  display: inline-flex;
  background: #323544;
  @media (max-width: 1200px) {
    overflow-x: scroll;
    overflow-y: hidden;
  }
  &::-webkit-scrollbar {
    height: 3px;
    background-color: #323544;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 155, 216, 0.8);
  }

  &::-webkit-scrollbar-track {
    background-color: #1e202b;
  }
}
.board-main {
  transition: 0.2s;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  color: #bfc1c8;
  min-width: 375px;
  @media (max-width: 575.98px) {
    min-width: 245px;
  }
  &__header {
    justify-content: space-between;
    padding: 10px;
    display: flex;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.1);
  }
  &__day {
    margin-right: 20px;
  }
  &__body {
    padding: 30px 20px;
  }
  &__city {
    font-size: 1.2rem;
  }
  &__country {
    font-size: 0.9rem;
  }
  &__temperature {
    color: white;
    display: flex;
    align-items: center;
    .num {
      font-size: 5.4rem;
      font-weight: bold;
      margin-right: 20px;
      @media (max-width: 575.98px) {
        font-size: 2.8rem;
      }
    }
    i {
      position: relative;
      color: $colorBlue;
      transform-origin: 0% 50%;
      font-size: 3rem;
      &.animated {
        animation: animated 6s both infinite;
      }
      @media (max-width: 575.98px) {
        font-size: 2.4rem;
      }
    }
  }
  &__features {
    display: flex;
    justify-content: space-between;
    @media (max-width: 575.98px) {
      flex-direction: column;
      font-size: 0.9rem;
    }
    img {
      height: 20px;
      width: 20px;
      margin-right: 3px;
    }
    div {
      display: flex;
      align-items: center;
      @media (max-width: 575.98px) {
        margin: 4px 0;
      }
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
