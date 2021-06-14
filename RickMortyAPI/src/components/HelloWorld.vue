<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h3>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Adult Swim. 
      The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, 
      who split their time between domestic life and interdimensional adventures.</h3>
    <img src="../assets/rick-and-morty.jpg" height="450px">
    <div class="meet">
      <h1>Meet them</h1>
      <div v-for="(item,index) in resultados" :key="index">
        <img :src="item.image">
        <h3>{{item.name}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:""
    }
  },
  methods:{
    loadThem(){
      axios.get('https://rickandmortyapi.com/api/character/[1,2,3,4,5]')
        .then(
          res => {
            this.resultados = res.data
            console.log(this.resultados)
          }
        )
    }
  },
  mounted(){
    this.loadThem();
  }
}
</script>
<style scoped>
.meet ul {
  list-style-type: none;
  padding: 0;
}
.meet li {
  display: inline-block;
  margin: 0 10px;
}
h3 {
  margin: 60 0 40px;
}
a {
  color: #42b983;
}
</style>