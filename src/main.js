import Vue from "vue";
import App from "./App.vue";
import router from "./router";
require("@/assets/styles.css");

Vue.config.productionTip = false;

Vue.directive("changeStyle", {
  bind(e1, binding) {
    console.log(e1);
    console.log(binding);
    e1.style.color = binding.value.color;
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
