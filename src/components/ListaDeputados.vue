
<template>
<div>
    <b-jumbotron  text-variant="white" border-variant="dark" style="background-image: url('https://www.adpf.org.br/adpf/imagens/noticias/chamadaPrincipal/9783_posse.jpg')">
    <template #header>API de Deputados</template>

    <template #lead>
      Bem-vindo ao site API de Deputados.
    </template>

    <hr class="my-4">

<p>Aqui conseguimos buscar, adicionar, editar, deletar e filtrar todos os deputados</p>

    <b-input-group>
      <b-form-input v-model="resultado" placeholder="Procure o Deputado"></b-form-input>
      <b-input-group-append>
        <b-button variant="success" @click="atualizarListaAux(resultado)">Pesquisar</b-button>
      </b-input-group-append>
    </b-input-group>

  </b-jumbotron>
<b-row align-h="around" class="ml-auto">


          
    <b-card  v-for="deputado in  listaAux || allDeputados.dados "
      :key="deputado.id"
      :title="deputado.nome"
      tag="article"
      style="max-width: 540px"
      class="mb-3 shadow col-5"
       
       >
  <b-icon style="margin-top : -45px ; margin-right : -25px " class="float-right"  @click="deleteDeputado(deputado.id)" icon="x-circle" scale="1.3"  variant="danger"></b-icon>
      <b-row
      @click="detalhar(deputado.id, deputado)"
      >
        <b-col md="6"
          ><b-card-img
            :src="deputado.urlFoto"
          >
          </b-card-img
        ></b-col>
        <b-col md="6"
          ><b-list-group>
            <b-list-group-item>Email: {{deputado.email}}</b-list-group-item>
            <b-list-group-item
              >Partido:  {{ deputado.siglaPartido }}
              </b-list-group-item
            >
          </b-list-group>

          <hr />

          <b-row align-h="around">
           
            
          </b-row>
        </b-col>
      </b-row>
     
    </b-card>
   
  </b-row>

</div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListaDeputados",

  data(){
    return{

      listaAux: null,
      resultado: ""
    }

  },
 
  computed:{

    ...mapGetters(["allDeputados"]),
    
      
     
    },

  methods: {
    ...mapActions(["getDeputados"]),

    deleteDeputado: function (id) {
      this.allDeputados.dados = this.allDeputados.dados.filter(
        (u) => u.id !== id
      );
    },

    detalhar: function(idAux, deputadoAux){
      this.$router.push({ name: 'detalhe', params: { id: idAux, deputado:deputadoAux} })
      
    },

    atualizarListaAux: function(nomeAux){
       this.listaAux = this.allDeputados.dados.filter(
        (u) => u.nome.toUpperCase().includes(nomeAux.toUpperCase())  
        );

    }
    
  },

  created() {
    this.getDeputados();

   

  },
};


</script>

<style>
.card {
  margin: 15px;
  margin-top: 30px;
  cursor: pointer;
}


</style>
