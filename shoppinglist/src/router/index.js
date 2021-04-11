import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store'

import Home from "../views/Home.vue";

//auth
import Login from "../views/auth/Login.vue";
import Create from "../views/auth/Create.vue";

//product
import Product from "../views/product/products.vue";

//category
import Category from "../views/category/categories.vue";

//recipes
import Recipe from "../views/recipes/recipes.vue";

//lists
import List from "../views/list/lists.vue";

Vue.use(VueRouter);

const allowed = ["Login","Create"]

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
  {
      path: "/lists",
      name: "List",
      component: List
  },
  {
      path: "/recipes",
      name: "Recipes",
      component: Recipe
  },
  {
      path: "/categories",
      name: "Categories",
      component: Category
  },
  {
      path: "/products",
      name: "Product",
      component: Product
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.userToken ? true : false
    allowed.includes(to.name)
    if (!allowed.includes(to.name) && !isAuthenticated){
        next({ name: 'Login' })
    } 
    else{
        next()
    } 
});

export default router;
