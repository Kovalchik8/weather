<template>
  <div class="notification">
    <div class="notification__message">
      <img src="../assets/images/icons/cross.svg" alt="">
      <span>
        {{notification.message}}
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      timeout: []
    }
  },
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('Notification', ['delete'])
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.delete(this.notification)
    }, 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss" scoped>
.notification {
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 154, 216, 0.9);
  padding: 10px 25px;
  margin: 10px 0;
  border-radius: 15px;
  &__message {
    display: flex;
    align-items: center;
    @media (max-width: 767.98px) {
      flex-direction: column;
    }
    span {
      text-align: center;
    }
    img {
      width: 15px;
      margin-right: 7px;
      @media (max-width: 767.98px) {
        margin-bottom: 7px;
      }
    }
  }
}
</style>
