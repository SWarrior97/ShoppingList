import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;


import "@/assets/css/common.css"
import "@/assets/css/util.css"
import "@/assets/css/basscss.css"
import "@/assets/css/colors.css"
import "@/assets/css/main.css"

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
