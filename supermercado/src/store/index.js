import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
  state: {
    info: [],
    carro:[],
    venda:[],
    user:null
  },
  mutations: {
    setUser(state, user){
      state.user=user
    },
    selectProduct(state, item){
      state.favoritos = [item, ...state.favoritos]
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    deselectProduct(state, index){
      state.favoritos.splice(index,1)
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    loadProduts(state, item){
      state.info=item
    },
    startList(state, lista){
      state.carro=lista
    },
    startSells(state, lista){
      state.venda=lista
    }
  },
  actions: {
    loadSells({commit}){
      axios.get('')
      .then(
        res => commit('startSells',res.data)
      )
    },
    loadProduts({ commit }){
      let resultados = []
      let breeds = []
      let carregaBreed = (breed) => {
        return axios.get(''+breed)
        .then(
          res => res.data.message
        )
      }
      let infoLocalStorage = localStorage.getItem('infoLocal')
      if(!infoLocalStorage){
        axios.get('')
        .then(
          res => {
            return res.data.message 
          }
        )
        .then(
          res => {
            breeds=[...Object.keys(res)]
            return [...Object.keys(res)]
          }
        )
        .then(
          res => {
            return axios.all([...res.map(x=>carregaBreed(x))])
          }
        )
        .then(
          res => {
            for(let [index, item] of res.entries()){
              resultados.push({
                'name': breeds[index],
                'photo': item
              })
            }
            return resultados
          }
        )
        .then(
          res => {
            commit('loadProduts', resultados)
            localStorage.setItem('infoLocal', JSON.stringify(res))
          }
        )
      } else {  
        commit('loadProduts', JSON.parse(infoLocalStorage))
      }
    },
    LoadList({commit}){
      const ListLocalStorage = localStorage.getItem('ListLocal')
      if(!ListLocalStorage){
        localStorage.setItem('ListLocal', '[]')
      }else{
        commit('startList', JSON.parse(ListLocalStorage))
      }
    }
  },
  getters: {
    productsSells: state =>{
      return [...new Set (state.venda.map(x=>x.nome))]
        .map(res => { 
          return{
            'nome': res,
            'foto' : state.info.find(item => item.name === res).photo
          }
        })
    }
  }
})
