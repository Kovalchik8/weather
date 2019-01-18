<template>
  <div class="banner" :style="images"></div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    images() {
      if (this.Teleport.images.photos) {
        let imgMobile = this.Teleport.images.photos[0].image.mobile
        let imgWeb = this.Teleport.images.photos[0].image.web
        if (imgMobile && imgWeb) {
          return { backgroundImage: `url('${imgWeb}')` }
        } else return ['', '']
      } else return ['', '']
    },
    ...mapState(['Teleport'])
  }
}
</script>

<style lang="scss">
.banner {
  position: relative;
  z-index: -1;
  width: 100%;
  min-height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../assets/images/kyiv.jpg');
  &:before {
    content: '';
    position: absolute;
    top: 0;
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
}
</style>
