<template>
  <div>
    <b-card
      :img-src="deputado.urlFoto"
      img-height="472px"
      img-width="354px"
      :title="deputado.nome"
      img-alt="Card image"
      img-left
      style="min-width: 20rem"
      class="mb-3"
    >
      <b-card-text>
        <b>nome: </b>
        {{ deputado.nome }}
      </b-card-text>

      <b-card-text>
        <b>email: </b>
        {{ deputado.email }}
      </b-card-text>

      <b-card-text>
        <b>estado: </b>
        {{ deputado.siglaUf }}
      </b-card-text>

      <b-card-text>
        <b>partido: </b>
        {{ deputado.siglaPartido }}
      </b-card-text>

      <b-alert variant="success" show v-if="deputado.idLegislatura == 56"
        >ATIVO</b-alert
      >
      <b-alert variant="danger" show v-else> NAO ESTA ATIVO</b-alert>
    </b-card>
    <div>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="nome:"
          label-for="input-1"
          description="Nao iremos compartilhar os seus dados"
        >
          <b-form-input
            v-model="deputado.nome"
            type="text"
            required
            placeholder="Entre com o seu nome"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Email: " label-for="input-1">
          <b-form-input
            v-model="deputado.email"
            type="email"
            required
            placeholder="Entre com o email"
          ></b-form-input>
        </b-form-group>

        <div>
          <div class="mt-3">
            <a>{{ deputado.siglaUf }}</a>
          </div>
          <b-form-select
            v-model="deputado.siglaUf"
            :options="options"
          ></b-form-select>
        </div>

        <b-form-group label="partido:" label-for="input-1">
          <b-form-input
            v-model="deputado.siglaPartido"
            type="text"
            required
            placeholder="Entre com o seu partido"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Editar</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "detalhe",
  data() {
    return {
      id: this.$route.params.id,
      deputado: this.$route.params.deputado,

      selected: null,
      options: [
        { value: "AC", text: "AC" },
        { value: "AL", text: "AL" },
        { value: "AP", text: "AP" },
        { value: "CS", text: "SC" },
        { value: "SP", text: "SP" },
        { value: "RJ", text: "RJ" },
      ],
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.deputado));
    },
  },
  created() {
    this.companies.push(this.usuario.company.name);
  },
};
</script>

<style>
</style>