<template>
  <div class="episodes">
    <img src="../assets/RandMEpisodes.jpg">
    <SEpi msg="Research your favorites episodes"/>
  </div>
</template>
<script>
import SEpi from '@/components/SEpi.vue'
export default {
  name: 'Episodes',
  components: {
    SEpi
  }
}
</script>
<style scoped>
@media (min-width: 1080px){
  #episodes img{
    margin-top: 30px;
    width: 500px; 
    height: 230px;
  }
}
</style>