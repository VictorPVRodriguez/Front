<template>
  <div style="display:flex">
    <div class="favorites">
      <div v-for="(item, index) in $store.state.favoritos" :key="index">
        <div class="container">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appCard from "@/components/app-card.vue"
export default {
  components: {
    appCard
  }
}
</script>
<style scoped>
h3 {
  margin: 20px 20px 0;
}
ul {
  list-style-type: none;
  padding: 10px;
}
li {
  display: inline-block;
  margin: 20px 10px;
}
a {
  color: #42b983;
}
.favorites{
  display: flex;
  flex-flow: row wrap;
  box-shadow: 5px 5px 15px rgb(87, 245, 100);
}
.container{
  display:inline-block;
  flex-wrap: center;
  height: 220px;
  width: 240px;
  align-content: center;
  margin: 28px;
  background-color: rgb(222, 236, 206);;
  box-shadow: 10px 0px 5px 5px rgba(0,0, 0, 0.25);
  flex-flow: row;
}
img{
  height: 180px;
  box-shadow: 2px 2px 15px 2px rgb(87, 245, 100);
}
</style>