<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="pesquisa">
    <button @click="carregaInfo(pesquisa)">Pesquisar</button>
    <div v-for="(item, index) in resultados" :key="index">
        <h3>{{item}}</h3>
        <img :src="item" alt="">
        <!-- <h3>{{item.data[0].title}}</h3>
        <img :src="item.links[0].href" alt="">
        <p>{{item.data[0].description}}</p> -->
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
      resultados: ""
    }
  },
  methods:{
    carregaInfo(query){
      // axios.get('https://images-api.nasa.gov/search?q='+query+'&media_type=image')
      axios.get('https://dog.ceo/api/breed/'+query+'/images')
        .then(
          res => {
            this.resultados = res.data.message //res.data.collection.items
            console.log(this.resultados);
          }
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>