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
        } else
          return {
            backgroundImage: ''
          }
      } else
        return {
          backgroundImage: ''
        }
    },
    ...mapState(['Teleport'])
  }
}
</script>

<style lang="scss">
.banner {
  position: absolute;
  top: 100px;
  z-index: -1;
  width: 100%;
  min-height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
