<template>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        >
        <img
            :src="img"
            alt="John"
        >
        </v-avatar>

        <div v-if="authUser">{{authUser.username}}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(link,index) in links" :key="index"
          link
          @click="goTo(link.path)"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      links: require('../configs/menu.json')
    }),
    computed:{
        authUser (){
            return this.$store.state.authUser
        },
        img(){
            return `${require('@/assets/img/food.jpg')}`
        }
    },
    methods: {
        goTo(path){
            if(path){
                if(this.$route.path === path){
                    return
                }
                this.$router.push(path)
                return
            }

            this.$store.commit("setToken", null);
            this.$store.commit("setCurrentUser", null);
            this.$router.push({name:'Login'})
        }
    },
  }
</script>