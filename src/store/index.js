import Vuex from "vuex";
import Vue from "vue";
import deputados from "./modules/deputados";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    deputados
   
  }
});