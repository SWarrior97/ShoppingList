<template>
  <v-app id="inspire">
    <Menu />
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <div class="footer">
          <div class="flex justify-end mb3">
            <v-icon class="btn-plus pointer" @click="addList()">
              mdi-plus-circle
            </v-icon>
          </div>
        </div>
      </v-container>
      <Modal ref="modalPopup" />
    </v-main>
  </v-app>
</template>

<script>
import Menu from "../components/menu";
import Modal from "../components/modal";
import { EventBus } from "../plugins/eventBus";
import fetch from "node-fetch";

export default {
  components: {
    Menu,
    Modal
  },
  data: () => ({
    drawer: null,
    links: require("../configs/menu.json"),
    name: null
  }),
  created() {
    const token = this.$store.state.userToken;

    if (!token) {
      this.$router.push({ name: "Login" });
    }
  },
  computed: {
    authUser() {
      return this.$store.state.authUser;
    },
    img() {
      return `${require("@/assets/img/food.jpg")}`;
    }
  },
  methods: {
    goTo(path) {
      if (this.$router.path === path) {
        return;
      }
      this.$router.push(path)
    },
    addList() {
      const event = "addShoppingList";
      const formFields = [
        {
          name: "Name",
          type: "text",
          icon: "mdi-rename-box",
          model: this.name,
          field: "name"
        }
      ];
      const fields = {
        title: "Add Shopping List",
        btnText: "Add",
        event: event
      };
      this.$refs["modalPopup"].open(formFields, fields);
    },
    async addShoppingList(data){
      const url = process.env.VUE_APP_API_URL + "/shoppingList";
      const body = {
        username: this.$store.state.authUser.username,
        token: this.$store.state.userToken,
        data: data
      };
      const response = await fetch(url, {
        method: "Post",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
        //const json = await response.json()
        /* if(!json.sucess){
            
        }*/
      }
    }
  },
  mounted() {
    EventBus.$on("addShoppingList", this.addShoppingList);
  }
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 80%;
}

.btn-plus {
  font-size: 4em !important;
}
</style>
