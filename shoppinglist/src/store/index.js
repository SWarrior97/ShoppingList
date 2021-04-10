import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState({
        paths: [
           
        ]
    })],
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
