<template>
  <div class="signup">
    <h3>:: Sign Up ::</h3>
    <form @submit.prevent="submit">
      <div class="form-group">
        <span>Username</span>
        <input type="username" class="form-control form-control-lg" v-model="username"/>
      </div>
      <div class="form-group">
        <span>Password</span>
        <input type="password" class="form-control form-control-lg" v-model="password"/>
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>
      <br><br>
      <span>Do you have an account? </span><a href="login">Log in</a>
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
      username:"",
      password:""
    }
  },
  methods: {
    submit() {
      axios.post('http://localhost:3000/conta',{
        username: this.username,
        password: this.password,
        returnSecureToken:true
      }).then((res) => {
          console.log(res),
          this.$router.push('/Form')
        })
        .catch((res) => console.log("Fail",res))
    }
  }
}
</script>
<style scoped>
.signup {
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