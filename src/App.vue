<template>
  <b-container id="App">
    <Header></Header>
   

    <router-view />

    <footer class="page-footer font-small blue">
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://www.linkedin.com/in/rodrigo-rocha-4a1179165/">
          Rodrigo Rocha</a
        >
      </div>
      <!-- Copyright -->
    </footer>
  </b-container>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Header from "./components/Header";

export default {
  name: "App",

  
  components: {
    Header,
  },
  data(){
    return{
        resultado: ""
    }
  },
computed: mapGetters(["allDeputados"]),

  methods:{
     ...mapActions(["getDeputados"]),

  },
   created() {
    this.getDeputados();
  },

};
</script>

<style>

body{
background-color: rgb(240, 240, 240);
}
</style>
