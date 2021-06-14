<template>
  <div class="episodes">
    <h1>{{ msg }}</h1>
    <div v-for="(item,index) in resultados" :key="index">
      <div class="container">
        <h3>{{item.episode}}</h3>
        <h3>{{item.name}}</h3>
        <h3>{{item.air_date}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Episodes',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:""
    }
  },
  methods:{
    loadEpisodes(){
      axios.get('https://rickandmortyapi.com/api/episode')
        .then(
          res => {
            this.resultados = res.data.results
            console.log(this.resultados)
          }
        )
      
    }
  },
  mounted(){
      this.loadEpisodes()
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 50px;
}
.container{
  display:inline-block;
  flex-wrap: center;
  height: 220px;
  width: 350px;
  align-content: center;
  margin: 20px;
  background-color: rgb(222, 236, 206);;
  box-shadow: 10px 10px 5px 5px rgba(0,0, 0, 0.25);
  flex-flow: row;
}
a {
  color: #42b983;
}
</style>
