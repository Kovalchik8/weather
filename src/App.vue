<template>
  <div id="app">
    
    <Navbar />
    <Banner />
   
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'

export default {
  components: {
    Banner,
    Navbar
  }
}
</script>

<style land="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
