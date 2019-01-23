<template>
  <div class="notifications">
    <NotificationBar v-for="notification in Notification.notifications" :key="notification.id" :notification="notification" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotificationBar from '@/components/NotificationBar'

export default {
  components: {
    NotificationBar
  },
  computed: {
    ...mapState(['Notification'])
  }
}
</script>

<style lang="scss" scoped>
.notifications {
  z-index: 99999;
  position: absolute;
  bottom: 100px;
  right: 20px;
  @media (max-width: 767.98px) {
    width: 80%;
    font-size: 0.9rem;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 575.98px) {
    width: 90%;
  }
}
</style>
