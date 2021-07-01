<template>
  <div class="products">
      <h1>{{ msg }}</h1>
      <div v-for="(item,index) in resultados" :key="index">
      <div class="container">
        <button @click="selectProduct(item)">&#10084;</button>
        <h1>{{item.nome}}</h1>
        <h3>{{item.desconto}}</h3>
        <h3>{{item.preco}}</h3>
        <h3>{{item.categoria}}</h3>
        <h3>{{item.stock}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      resultados:"",
      pesquisa:"",
      cart: []
    }
  },
  methods:{
    selectProduct(item) {
      this.$store.commit('selectProduct',item);
    },
    deselectProduct(index){
      this.$store.commit('deselectProduct',index);
    },
    loadProduts(){
      axios.get('http://localhost:3000/produtos')
        .then(
          res => {
            this.resultados = res.data.results
            console.log(this.resultados)
          }
        )
      
    }
  },
  mounted(){
      this.loadProduts()
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
</style>