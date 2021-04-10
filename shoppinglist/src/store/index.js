import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import Vuex from "vuex";
//this.$store.commit("setLoaded", false);
Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState({
        paths: [
           'userToken','authUser'
        ]
    })],
  state: {
    userToken:null,
      authUser:null
  },
  mutations: {
    setCurrentUser(state, data) {
        Vue.set(state, 'authUser', data);
    },
    setToken(state,data){
        Vue.set(state, 'userToken', data);
    }
  },
  actions: {},
  modules: {}
});
