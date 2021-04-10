<template>
  <div class="limiter">
		<div class="container-login100" :style="image">
			<div class="wrap-login100 p-t-30 p-b-50">
				<span class="login100-form-title p-b-41">
					Account Login
				</span>
				<form class="login100-form validate-form p-b-33 p-t-5">

					<div class="mt3 mx3">
                        <v-text-field
                            placeholder="Grocery delivery"
                            hint="username"
                            outlined
                            prepend-icon="mdi-account"
                        ></v-text-field>
                    </div>

                    <div class="m-t-10 mx3">
                        <v-text-field
                            placeholder="Grocery delivery"
                            hint="password"
                            outlined
                            prepend-icon="mdi-lock"
                            type="password"
                        ></v-text-field>
                    </div>

					<div class="container-login100-form-btn m-t-32">
						<button class="login100-form-btn">
							Login
						</button>
					</div>

				</form>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    
  }),

  computed:{
      image (){
          
        return {
          backgroundImage: `url(${require('@/assets/img/bg-01.jpg')})`
        }
      }
  }
};
</script>

<style>
</style>
