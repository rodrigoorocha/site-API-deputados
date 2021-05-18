import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaDeputados from './components/ListaDeputados.vue'
import Detalhe from './components/Detalhe.vue'
import Adicionar from './components/Adicionar.vue'




Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        
        {
            path: '/',
            name: 'ListaDeputados',
            component:ListaDeputados
            
        } ,
        
        {
            path: '/Detalhe/:id',
            name: 'detalhe',
            component: Detalhe
            
        },

        {
            path: '/Adicionar',
            name: 'Adicionar',
            component: Adicionar
            
        }
       
        
        
      
    ]
});
