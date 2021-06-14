<template>
  <div class="locations">
    <h1>{{ msg }}</h1>
    <div v-for="(item,index) in resultados" :key="index">
      <div style="display:align-content">
        <div class="container">
          <h3>{{item.name}}</h3>
          <h3>{{item.type}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Locations',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:""
    }
  },
  methods:{
    loadLocations(){
      axios.get('https://rickandmortyapi.com/api/location')
        .then(
          res => {
            this.resultados = res.data.results
            console.log(this.resultados)
          }
        )
    }
  },
  mounted(){
    this.loadLocations()
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
  margin: 0 10px;
}
.container{
  display:inline-block;
  flex-wrap: center;
  height: 150px;
  width: 300px;
  align-content: center;
  margin: 20px;
  background-color: rgb(222, 236, 206);;
  box-shadow: 10px 10px 5px 5px rgba(0,0, 0, 0.25);
  flex-flow: row wrap;
}
a {
  color: #42b983;
}
</style>
