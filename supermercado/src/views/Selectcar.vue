<template>
  <div style="display:flex">
    <div class="breed">
      <div v-for="(item, index) in resultados" :key="index">
          <app-card lagura="520px">
          {{item}} &emsp;<button @click="marcaFavoritos(item)">&#9829;</button>
          <br><br>
          <img :src="item" width="500" alt="">
          </app-card>
      </div>
    </div>
    <app-card class="favoritos" cor="grey">
      <p>FAVORITOS</p>
      <div v-for="(item, index) in $store.state.favoritos" :key="index">
        <app-card cor="white" >
          <img :src="item" width="90" alt="" @click="desmarcaFavoritos(index)">
        </app-card>
      </div>
    </app-card>
  </div>
</template>

<script>
import axios from "axios"
import appCard from '@/components/app-card.vue'
export default {
  components: { 
    appCard
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      resultados: "",
      pesquisa: "",
      favoritos: []
    }
  },
  methods:{
    marcaFavoritos(item){
      this.$store.commit('marcaFavoritos',item)
    },
    desmarcaFavoritos(index){
      this.$store.commit('desmarcaFavoritos',index)
    },
    LoadInfo(query){
      axios.get(''+query)
        .then(
          res => {
            this.resultados = res.data.results
            console.log(this.resultados);
            return res.data.message
          }
        )
    },
    carregaBreed(breed){
        return axios.get(''+query)
        .then(
          res => res.data.message
        )
    }
  },
  created (){
    this.LoadInfo(this.$route.params.id);
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
a {
  color: #42b983;
}
.breed{
  display: flex;
  flex-flow: row wrap;
}
.favoritos{
  max-width: 130px;
  font-weight: 700;
  color: white;
}
</style>