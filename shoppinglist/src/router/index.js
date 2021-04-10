import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Create from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
      path: "/",
      name: "Home",
      component: Home
  },
  {
      path: "/login",
      name: "Login",
      component: Login
  },
  {
      path: "/create",
      name: "Create",
      component: Create
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
