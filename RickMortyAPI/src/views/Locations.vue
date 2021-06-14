<template>
  <div class="locations">
    <img src="../assets/RandMLocations.jpg" >
    <SLocat msg="Find the most incredibles places in the world of Rick and Morty."/>
  </div>
</template>
<script>
import SLocat from '@/components/SLocat.vue'
export default {
  name: 'Locations',
  components: {
    SLocat
  }
}
</script>
<style scoped>
@media (min-width: 1080px){
  #locations img{
    margin-top: 30px;
    width: 500px; 
    height: 230px;
  }
}
</style>