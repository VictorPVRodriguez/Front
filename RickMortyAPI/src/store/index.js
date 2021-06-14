import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
  state: {
    info: [],
    favoritos:[],
    list:[],
    user: null
  },
  mutations: {
    setUser(state,user){
      state.user = user
    },
    marcaFavoritos(state, item){
      state.favoritos = [item, ...state.favoritos]
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    desmarcaFavoritos(state, index){
      state.favoritos.splice(index,1)
      localStorage.setItem('favoritoLocal', JSON.stringify(state.favoritos))
    },
    LoadInfo(state, item){
      state.info = item
    },
    iniciaFavoritos(state, lista){
      state.favoritos = lista
    }
  },
  actions: {
    LoadInfo({ commit }){
      let resultados = []
      let breeds = []
      let carregaBreed = (nome) => {
          return axios.get('https://rickandmortyapi.com/api/character/?name='+nome)
          .then(
            res => res.data.results
          )
      }
      let infoLocalStorage = localStorage.getItem('infoLocal')
      if(!infoLocalStorage){
        axios.get('https://rickandmortyapi.com/api/character')
        .then(
          res => {
            return res.data.results
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
                    resultados.push(
                        {
                            'name': breeds[index],
                            'photo': item
                        }
                    )
                }
                return resultados
            }
        )
        .then(
          res => {
            commit('LoadInfo', resultados)
            localStorage.setItem('infoLocal', JSON.stringify(res))
          }
        )
      } else {  
        commit('LoadInfo', JSON.parse(infoLocalStorage))
      }
    },
    loadFavorites({commit}){
      const favoritoLocalStorage = localStorage.getItem('favoritoLocal')
      if(!favoritoLocalStorage){
        localStorage.setItem('favoritoLocal', '[]')
      }else{
        commit('iniciaFavoritos', JSON.parse(favoritoLocalStorage))
      }
    }
  },
  getters: {
    myFavorites: state =>{
      return [...new Set (state.list.map(x=>x.nome))]
        .map(res => { 
          return{
            'name': res.data.results.name,
            'status': res.data.results.status,
            'species': res.data.results.species,
            'type': res.data.results.type,
            'gender': res.data.results.gender,
            'image' : res.data.results.image
          }
        })
    }
  }
})
