<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="offset-md-2 col-md-8">
         <div class="about__image">
           <img src="../assets/images/programmer.jpg" alt="">
         </div>
         <p> Nice to e-meet you <img src="../assets/images/icons/nerd.svg" class="about__icon">
          This is a weather forecast website powered with modern framework Vue js <img class="about__icon about__icon--vue" src="../assets/images/icons/vue.png" alt=""> If you find it good enough feel free to use the <a href="https://github.com/Kovalchik8/weather" target="_blank" rel="noopener noreferrer">source code</a>.</p>
          <p class="about__api">
            Following APIs are used:<br>
            <a href="https://openweathermap.org/appid#use" target="_blank" rel="noopener noreferrer">Open Weather Map</a> 
            <a href="http://developers.teleport.org/api/getting_started/#photos_ua" target="_blank" rel="noopener noreferrer">Teleport</a> 
            <a href="https://community.algolia.com/places/documentation.html" target="_blank" rel="noopener noreferrer">Algolia Places</a>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
.about {
  line-height: 1.8;
  font-size: 1.2rem;
  background: #323544;
  padding: 50px 0 0 0;
  color: snow;
  @media (max-width: 575.98px) {
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
  }
  &__image {
    margin-bottom: 30px;
    text-align: center;
    img {
      max-width: 175px;
      border-radius: 50%;
    }
  }
  p > a {
    color: $colorBlue;
    text-decoration: underline;
  }
  &__icon {
    display: inline-block;
    width: 20px;
    &--vue {
      width: 25px;
    }
  }
  &__api {
    margin-bottom: 60px;
    a {
      display: block;
      margin: 5px 0 0 10px;
    }
  }
  .footer {
    background: #1e202b;
    top: 0;
    &__social {
      li {
        a {
          background: #323544;
          &:hover {
            text-decoration: none;
            color: white;
            background-color: $colorBlue;
          }
        }
      }
    }
  }
}
</style>
