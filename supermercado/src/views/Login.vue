<template>
  <div class="login">
    <form @submit.prevent="submit">
      <h3>:: Log In ::</h3>
      <div class="form-group">
        <span>Username</span>
        <input type="username" class="form-control form-control-lg" v-model="username"/>
      </div>
      <div class="form-group">
        <span>Password</span>
        <input type="password" class="form-control form-control-lg" v-model="password"/>
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Log In
      </button>
      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password?</router-link>
        <br><br>
        <span>Don´t you have an account? </span><a href="signup">Sign up</a>
      </p>
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
      username: "",
      password: ""
    }
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/conta', {
        username: this.username,
        password: this.password,
        returnSecureToken:true
      }).then((res) => {
          this.$store.commit('setUser',res.data),
          this.$router.push('/Cart')
      }).catch(
          res => console.log("Fail",res)
        )
    }
  }
}
</script>
<style scoped>
.login {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;
  flex-direction: column;
}
</style>