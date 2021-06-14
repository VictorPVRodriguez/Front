<template>
  <div id="app">
    <appCard cor='lightblue'>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/breeds">Breeds</router-link> |
        <router-link to="/fav">Favoritos</router-link> |
        <router-link to="/signup">Signup</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/admin">Venda</router-link>
      </div>
    </appCard>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import appCard from './components/app-card.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    appCard
  },
  mounted(){
    this.$store.dispatch('carregaInfo')
    this.$store.dispatch('carregaFavoritos')
    this.$store.dispatch('carregaVenda')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
