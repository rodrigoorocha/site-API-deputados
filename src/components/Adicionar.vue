<template>
  <b-container>
    <b-form>
      <b-form-group
        label="nome:"
        label-for="input-1"
        description="Nao iremos compartilhar os seus dados"
      >
        <b-form-input
          v-model="deputadoNovo.nome"
          type="text"
          required
          placeholder="Entre com o seu nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email: " label-for="input-1">
        <b-form-input
          v-model="deputadoNovo.email"
          type="email"
          required
          placeholder="Entre com o email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Estado: " label-for="input-1">
        <b-form-input
          v-model="deputadoNovo.siglaUf"
          type="text"
          required
          placeholder="Entre com o seu Estado"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="partido:" label-for="input-1">
        <b-form-input
          v-model="deputadoNovo.siglaPartido"
          type="text"
          required
          placeholder="Entre com o seu partido"
        ></b-form-input>
      </b-form-group>

      <b-button @click="adicionarDeputado" variant="primary">Criar</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import{ deputadoNovo} from "./../modelo/deputadoNovo.js"

export default {
  name: "Adicionar",

  data() {
   return deputadoNovo("","","","");

  },
  computed: mapGetters(["allDeputados"]),

  methods: {
    ...mapActions(["getDeputados"]),
    created() {
      this.getDeputados();
    },
    adicionarDeputado: function () {
      this.allDeputados.dados.push(this.deputadoNovo);
      alert("Adicionado com sucesso!");
    },
  },
};
</script>

<style>
</style>