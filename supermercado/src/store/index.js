import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
  state: {
    info: [],
    cart:[],
    sells:[],
    user:null
  },
  mutations: {
    setUser(state, user){
      state.user=user
    },
    selectProduct(state, item){
      state.cart = [item, ...state.cart]
      localStorage.setItem('sellLocal', JSON.stringify(state.sells))
    },
    deselectProduct(state, index){
      state.cart.splice(index,1)
      localStorage.setItem('sellLocal', JSON.stringify(state.sells))
    },
    loadProduts(state, item){
      state.info=item
    },
    startList(state, list){
      state.info=list
    },
    startSells(state, list){
      state.sells=list
    }
  },
  actions: {
    loadSells({commit}){
      axios.get('http://localhost:3000/produtos')
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
            'nome': res.data.results.nome,
            'foto' : state.info.find(item => item.name === res).photo
          }
        })
    }
  }
})
