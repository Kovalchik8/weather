<template>
  <div id="app">
    <NotificationContainer />
    <Navbar />

    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

import NotificationContainer from '@/components/NotificationContainer'

export default {
  components: {
    Navbar,
    NotificationContainer
  }
}
</script>

<style land="scss">
body {
  background: #1e202b;
  min-width: 300px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
