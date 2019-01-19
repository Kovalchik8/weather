<template>
  
  <b-navbar toggleable="md" type="dark">

    <div class="container">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <img src="@/assets/images/logo.png" alt="">
        <div class="navbar-brand__company">
          <span>WeatherApp</span>
          <span>check weather in your city</span>
        </div>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <ul class="navbar__nav">
          <router-link :to="{name: 'home'}" >Home</router-link>
          <router-link :to="{name: '404'}" >About</router-link>
        </ul>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

        </b-navbar-nav>

      </b-collapse>
      
    </div>

  </b-navbar>

</template>

<style lang="scss">
.navbar {
  z-index: 9999;
  .navbar-toggler {
    margin-left: 15px;
    &:focus {
      outline: none;
    }
  }
  padding: 25px 0;
  background: $colorBgDark;

  &__nav {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
    @media (max-width: 767.98px) {
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    }
    a {
      color: white;
      transition: 0.2s;
      border-radius: 30px;
      border: 2px solid transparent;
      padding: 3px 20px;
      margin: 0 5px;
      @media (max-width: 767.98px) {
        margin: 8px 5px;
      }
      &:hover,
      &.router-link-exact-active {
        color: $colorBlue;
        border-color: $colorBlue;
        text-decoration: none;
      }
      &:focus,
      &.active {
        color: $colorBlue;
      }
    }
  }

  &-brand {
    display: flex;
    align-items: center;
    img {
      width: 64px;
      margin-right: 10px;
    }
    &__company {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      span:first-child {
        font-weight: bold;
        font-size: 19px;
      }
      span:last-child {
        font-size: 12px;
        margin-top: -4px;
      }
    }
  }
}
</style>
