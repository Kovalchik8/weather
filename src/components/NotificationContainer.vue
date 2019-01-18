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
  z-index: 999;
  position: absolute;
  bottom: 15px;
  right: 20px;
}
</style>
