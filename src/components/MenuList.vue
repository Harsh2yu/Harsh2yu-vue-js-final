<template>
  <li v-on:click="displayMenu(menuItem)">
    <a href="#">{{menuItem}}</a>
  </li>
</template>
<script>
export default {
  name: "MenuList",
  props: ["menuItem"],
  methods: {
    displayMenu: function(menu) {
      this.$emit("showMenu", menu);
    }
  }
};
</script>