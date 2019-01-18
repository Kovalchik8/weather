<template>
  <div class="notification">
    <div class="notification__message">
      {{notification.message}}
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
    }, 2000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss" scoped>
.notification {
  color: rgba(255, 255, 255, 0.8);
  background: #1e202bb8;
  padding: 10px 25px;
  margin: 10px 0;
  border-radius: 15px;
}
</style>
