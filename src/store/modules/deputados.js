import axios from "axios"

var x_aberto = true 

const state = {
    deputados: []

  }; 
  
  const getters = {
      allDeputados: state => state.deputados,
  };
  
  const actions = { 
    getDeputados({ commit }){
      axios.get(
        "https://dadosabertos.camara.leg.br/api/v2/deputados"
      ).then((response) =>{
        commit('getDeputados', response.data);
      });
    },
};
  
  const mutations = {
    getDeputados: (state,data) => {if(x_aberto){state.deputados = data}x_aberto=false},
  }
  
  export default {
      state,
      actions,
      getters,
      mutations
    };
  