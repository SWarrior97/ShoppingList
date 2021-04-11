<template>
  <div class="limiter">
		<div class="container-login100 flex flex-column" :style="image">
            <div class="red-bg error-box">
                <span v-for="(error,index) in errors" :key="index" class="mx2">
                    {{error}}
                </span>
            </div>
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					Account Login
				</span>
				<form class="login100-form validate-form p-b-33 p-t-5">
                    
					<div class="mt3 mx3">
                        <v-text-field
                            v-model="username"
                            placeholder="Grocery delivery"
                            hint="username"
                            outlined
                            prepend-icon="mdi-account"
                        ></v-text-field>
                    </div>

                    <div class="m-t-10 mx3">
                        <v-text-field
                            v-model="password"
                            placeholder="Grocery delivery"
                            hint="password"
                            outlined
                            prepend-icon="mdi-lock"
                            type="password"
                        ></v-text-field>
                    </div>

					<div class="container-login100-form-btn m-t-32">
						<ul>
                            <li>
                                <button class="login100-form-btn" @click.prevent="login">
                                    Login
                                </button>
                            </li>
                            <li class="center mt1">
                                <a @click="goTo({name:'Create'})">Create Account</a>
                            </li>
                        </ul>
					</div>

				</form>
			</div>
		</div>
	</div>
</template>

<script>
import fetch from 'node-fetch';

export default {
  name: "App",

  components: {
  },

  data: () => ({
    username:null,
    password:null,
    loader:false,
    errors:[]
  }),

  computed:{
      image (){
        return {
          backgroundImage: `url(${require('@/assets/img/bg-02.jpg')})`
        }
      }
  },
  methods: {
      goTo (routeName) {
        this.$router.push({name:routeName.name});
      },
      async login(){
            this.loader = true
            const url = process.env.VUE_APP_API_URL + '/login'
            const body = {
                username: this.username,
                password: this.password
            } 
            
            const response = await fetch(url, 
            {
                method:'Post',
                body:JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            })

            if (response.ok){
                const json = await response.json()

                if(!json.sucess){
                    this.errors.push(json.message)
                    setTimeout(() => this.errors = [], 5000);
                    return
                }
                this.$store.commit("setToken", json.token);
                this.$store.commit("setCurrentUser", json.user);
                this.$router.push({name:'Home'})
            }
      }
  },
};
</script>

<style>
    .error-box{
        border-radius: 10px;
        height: 40px;
    }
</style>
