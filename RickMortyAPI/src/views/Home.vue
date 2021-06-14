<template>
  <div class="home">
    <img src="../assets/RickandMortyTitle.jpg">
    <HelloWorld msg="Welcome to the Rick and Morty unoficial Website...but what is Rick and Morty?"/>
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
<style scoped>
.home{
  flex-flow: row wrap;
}
@media (min-width: 1080px){
  #home img{
    margin-top: 10px;
    margin-bottom: 10px;
    width: 500px; 
    height: 230px;
  }
}
</style>