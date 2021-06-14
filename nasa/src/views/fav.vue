<template>
    <div style="display:flex">
        <div class="breed">
            <div v-for="(item, index) in $store.state.favoritos" :key="index">
                <app-card lagura="520px">
                    <div v-if="!!$store.getters.racaVenda.find((res)=>item.includes(res))">
                        <button>$$$ comprar $$$</button>
                    </div>
                    <br /><br />
                    <img :src="item" width="500" alt="">
                </app-card>
            </div>
        </div>
    </div>
</template>

<script>
import appCard from '@/components/app-card.vue'
export default {
  components: { 
    appCard
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