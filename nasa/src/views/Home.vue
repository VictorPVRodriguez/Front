<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>:: :: DESTAQUES :: ::</h3>
    <div v-if="$store.state.info.length > 0" class="breeds">
      <div v-for="(item, index) in $store.getters.racaVenda" :key="index">
        <app-card largura="200px"> 
          <img :src="item.foto" height="90" alt="">
          <div>{{item.nome}}</div>
        </app-card>
      </div>
    </div>
    <br>
    <HelloWorld msg="Raça de Cães"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import appCard from '@/components/app-card.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    appCard
  }
}
</script>
<style>
.breeds{
  display: flex;
  flex-flow: row wrap;
}
</style>