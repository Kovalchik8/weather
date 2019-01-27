<template>
  <div id="app">
    <Preloader/>
    <NotificationContainer/>
    <Navbar/>

    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Preloader from '@/components/Preloader'
import NotificationContainer from '@/components/NotificationContainer'

export default {
  components: {
    Navbar,
    NotificationContainer,
    Preloader
  }
}
</script>

<style land="scss">
body {
  background: #1e202b;
  min-width: 300px;
  overflow-y: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
