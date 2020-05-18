<template>
  <div class="users">
    <button class="button" v-on:click="toggleUsers($event)">Toggle Users</button>
    <div v-if="showUsers">
      <p v-for="user in users" :key="user">{{user}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: Array
  },
  data() {
    return {
      showUsers: true
    };
  },
  methods: {
    toggleUsers: function(event) {
      console.log(event.type);
      this.showUsers = !this.showUsers;
    }
  }
};
</script>