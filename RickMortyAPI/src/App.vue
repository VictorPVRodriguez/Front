<template>
  <div id="app">
    <app-card cor="#2f3640">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/Favorites">Favorites</router-link> |
        <router-link to="/Characters">Characters</router-link> | 
        <router-link to="/Episodes">Episodes</router-link> | 
        <router-link to="/Locations">Locations</router-link> |
        <router-link to="/Didyouknow">Did you know...?</router-link> |
        <router-link to="/Login">Login</router-link> |
        <router-link to="/Register">Register</router-link>
      </div>
    </app-card>
    <router-view/>
  </div>
</template>

<script>
import appCard from './components/app-card.vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    appCard
  },
  mounted(){
    this.$store.dispatch('LoadInfo')
    this.$store.dispatch('loadFavorites')
  }
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  background-image: url("C:/Users/User/Front-end/RickMortyAPI/src/assets/FondoAPI.jpg");
}
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(222, 236, 206, 0.89);
  box-shadow: 5px 5px 15px rgb(192, 66, 182);
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #a142b9;
}
#nav a.router-link-exact-active {
  color: #29d438;
}
h1{
  margin: center;
  margin-right: 24px;
  color: #a142b9;
}
h2{
  color: #a142b9;
}
h3{
  color: #a142b9;
  margin: center;
  margin-right: 8px;
}
img {
  box-shadow: 5px 5px 15px rgb(87, 245, 240);
}
@media (min-width: 375px) and (max-width: 1079px){
  #app {
    margin: 0 75px 0;
    border-radius: 2px;
  }
  #nav {
    padding: 4px;
    margin-left: 45px;
  }
  img {
    margin-top: 10px;
    width: 350px; 
    height: 200px;
  }
  h3 {
    margin: 30px 50px 20px;
  }
}
@media (min-width: 1080px){
  #app {
    margin: 0 145px 0;
    border-radius: 2px;
  }
  #nav {
    padding: 5px;
    margin-left: 300px;
  }
  h3 {
    margin: 5px 50px 25px;
  }
}
</style>