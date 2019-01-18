<template>
  <div class="container-fluid">
    <h1>Ops! This page doesn't exist</h1>
    <router-link class="link-home" :to="{name: 'home'}">To home page</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container-fluid {
  background: rgb(50, 53, 68);
  text-align: center;
  color: white;
  padding-top: 40px;
  padding-bottom: 40px;
  h1 {
    padding-top: 30px;
  }
  a.link-home {
    color: white;
    transition: 0.2s;
    border-radius: 30px;
    border: 2px solid transparent;
    padding: 5px 20px;
    margin: 30px 0;
    display: inline-block;
    font-size: 1.4rem;
    text-decoration: underline;
    &:focus,
    &.active {
      color: $colorBlue;
    }
  }
}
</style>
