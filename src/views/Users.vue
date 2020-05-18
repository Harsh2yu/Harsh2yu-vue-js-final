<template>
  <div class="users">
    <UsersList :users="['Harsh Vardhan', 'Shipra', 'Ramesh']"/>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'

export default {
  name: 'Users',
  components: {
    UsersList
  }
}
</script>
