<template>
  <div class="menu">
    <ul>
    <MenuList
      v-bind:key="menuItem"
      v-for="(menuItem, index) in menus"
      v-bind:menuItem="menuItem"
      v-bind:index="index"
      v-on:showMenu= "updateMenuName"
    ></MenuList>
    </ul>
    <button class="button" v-on:click="isDisplay =! isDisplay">Click me</button>
    <transition name="fade">
      <div v-show="isDisplay" v-changeStyle="{color:'orange'}" style="text-align:center; margin-top:50px;">
        Menu Displayed : {{ menuName }}
      </div>
     </transition>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList.vue'

export default {
  name: 'Menu',
  components: {
    MenuList
  },
   data() {
    return {
      menuName: "Default Menu",
      menus: ["Home", "Services", "About Us", "Contact"],
      isDisplay: false
    };
  },
  methods:{
    updateMenuName: function(menu){
      this.menuName = menu;
      console.log(menu);
    }
  }
}
</script>
