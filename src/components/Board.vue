<template>
  <div class="board-wrapper">
    <div id="board">
      <div class="board-main">
        <div class="board-main__header">
          <div class="board-main__day">{{currentDate[0]}}</div>
          <div class="board-main-date">{{currentDate[1]}}</div>
        </div>

        <div class="board-main__body">
          <div class="board-main__city">{{city}} 
            <span class="board-main__country">({{ country }})</span>  
          </div>
          <div class="board-main__temperature">

            <div class="num">
              {{temperatureInt}}<sup>o</sup>C
            </div>
            <i :class="icon"></i>
          </div>

          <div class="board-main__features">
            <div class="board-main__precipitation">
              <img src="../assets/images/icons/humidity.svg" alt="" srcset="">
              <span>{{humidity}}%</span>
              </div>
            <div class="board-main__wind">
              <img src="../assets/images/icons/wind.svg" alt="" srcset="">
              <span>{{wind}} m/sec</span>
              </div>
            <div class="board-main__humidity">
              <img src="../assets/images/icons/pressure.svg" alt="" srcset="">
              <span>{{pressure}} hPa</span>
              </div>
          </div>

        </div>

      </div>

      <BoardItem v-for="(item, index) in followingWeather" :key="index" :weather="item" />

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
    city() {
      return this.Weather.weather.city.name
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
    ...mapState(['Weather', 'Icons'])
  }
}
</script>

<style lang="scss">
@import '../assets/css/weather-icons.min.css';
// @import '../assets/css/weather-icons-wind.min.css';
.board-wrapper {
  display: flex;
  justify-content: center;
}
.board-item:nth-child(2n) {
  background: rgba(0, 0, 0, 0.1);
}
#board {
  display: inline-flex;
  border-radius: 10px;
  overflow: hidden;
  background: #323544;
}
.board-main {
  color: #bfc1c8;
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
    }
    i {
      color: $colorBlue;
      transform-origin: 0% 50%;
      transform: scale(3.2);
    }
  }
  &__features {
    display: flex;
    justify-content: space-between;
    img {
      height: 20px;
      width: 20px;
      margin-right: 3px;
    }
    div {
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
}
</style>
