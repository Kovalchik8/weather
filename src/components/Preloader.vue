<template>
  <div id="Preloader" :class="{hidden: !this.loader}">
    <img src="../assets/images/icons/sunny.svg" alt>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['loader'])
  }
}
</script>

<style lang="scss" scoped>
#Preloader {
  z-index: 99999;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $colorBgDark;
  &.hidden {
    display: none;
  }
  img {
    max-width: 70%;
  }
}
</style>
