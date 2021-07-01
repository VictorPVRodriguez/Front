<template>
  <div id="app">
    <router-link to="/"><img src="./assets/walmart.png" width="560" height="300"></router-link>
    <div id="nav">
      <usercard cor="#000000">
        <router-link to="/Cart">Cart</router-link> |
        <router-link to="/Login">Log in</router-link> |
        <router-link to="/Signup">Sign up</router-link> |
        <router-link to="/Admin">Admin</router-link>
      </usercard>
      <app-card cor="#048eff">
        <router-link to="/Products">See all products</router-link>
      </app-card>
    </div>
    <router-view/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import appCard from './components/app-card.vue'
import usercard from './components/usercard.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    appCard,
    usercard
  }
}
</script>
<style>
body{
  background-color: rgb(255, 255, 255);
}
#app {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #048eff;
}
#nav{
  background-color: #004f8f;
}
#nav a {
  font-weight: bold;
  color: #ffffff;
}
#nav a.router-link-exact-active {
  color: #ffffff;
}
@media (max-width: 500px){
  #app {
    margin: 0 5px 0;
    border-radius: 2px;
  }
  #nav {
    padding: 5px;
  }
  h3 {
    margin: 30px 50px 20px;
  }
  #nav img{
    width: 380px;
    height: 200px;
  }
}
@media (min-width: 375px) and (max-width: 1079px){
  #app {
    margin: 0 5px 0;
    border-radius: 2px;
  }
  #nav {
    padding: 5px;
  }
  #nav img{
    width: 480px;
    height: 260px;
  }
}
@media (min-width: 1080px){
  #app {
    margin: 0 5px 0;
    border-radius: 2px;
  }
  #nav {
    padding: 5px;
  }
  #nav img{
    width: 480px;
    height: 260px;
  }
}
</style>