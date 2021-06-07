<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div v-for="(item, index) in $store.getters.racaVenda" :key="index">
    {{item}}
    </div>
    <HelloWorld msg="Raça de Cães"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
