<template>
  <div class="characters">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="search">
    <button @click="loadCharacters(search)">Search</button>
    <div v-for="(item,index) in resultados" :key="index">
      <img :src="item.image">
      <button @click="marcaFavoritos(item)">&#10084;</button>
      <h3>{{item.name}}</h3>
      <h3>{{item.status}}</h3>
      <h3>{{item.species}}</h3>
      <h3>{{item.type}}</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Characters',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:"",
      pesquisa:"",
      favoritos: []
    }
  },
  methods:{
    marcaFavoritos(item) {
      this.$store.commit('marcaFavoritos',item);
    },
    desmarcaFavorito(index) {
      this.$store.commit('desmarcaFavorito',index);
    },
    loadCharacters(name){
      axios.get('https://rickandmortyapi.com/api/character/?name='+name)
        .then(
          res => {
            this.resultados = res.data.results
            console.log(this.resultados)
          }
        )
      
    }
  },
  mounted(){
      this.loadCharacters();
  }
}
</script>
<style scoped>
h1 {
  margin: 20px 0 0;
}
button {
  margin: 10px 0 20px;
}
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
</style>