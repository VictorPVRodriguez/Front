<template>
  <div class="characters">
    <img src="../assets/RandMCharacters.jpg">
    <SCha msg="Characters in Rick and Morty. Isn't it obvious enough?"/>
  </div>
</template>
<script>
import SCha from '@/components/SCha.vue'
export default {
  name: 'Characters',
  components: {
    SCha
  }
}
</script>
<style scoped>
@media (min-width: 1080px){
  #characters img{
    margin-top: 30px;
    width: 500px; 
    height: 230px;
  }
}
</style>