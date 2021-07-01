<template>
  <div class="formulary">
    <h3>:: Your personal information ::</h3>
    <form @submit.prevent="submit">
      <div class="form-group">
        <span>Name</span>
        <input type="nome" class="form-control form-control-lg" v-model="name"/>
      </div>
      <div class="form-group">
        <span>NIF</span>
        <input type="contribuinte" class="form-control form-control-lg" v-model="nif"/>
      </div>
      <div class="form-group">
        <span>Telefone number</span>
        <input type="telemovel" class="form-control form-control-lg" v-model="telefone"/>
      </div>
      <div class="form-group">
        <span>Location</span>
        <input type="morada" class="form-control form-control-lg" v-model="morada"/>
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>
    </form>
    <div class="socialicons">
      <ul>
        <li><img src="../assets/icon-youtube.svg"></li>
        <li><img src="../assets/icon-facebook.svg"></li>
        <li><img src="../assets/icon-instagram.svg"></li>
        <li><img src="../assets/icon-twitter.svg"></li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      nome:"",
      contribuinte:"",
      telemovel:"",
      morada:""
    }
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/cliente',{
        nome: this.nome,
        contribuinte: this.contribuinte,
        telemovel: this.telemovel,
        morada:this.morada
      }).then((res) => {
          console.log(res),
          alert("Sign up successfully"),
          this.$router.push('/cart')
        })
        .catch((res) => console.log("Fail",res))
    }
  }
}
</script>
<style scoped>
.formulary {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;
  flex-direction: column;
}
.socialicons{
  display:flex;
}
</style>