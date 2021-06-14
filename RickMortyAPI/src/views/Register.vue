<template>
  <div id="register">
    <img src="../assets/RaMIcon.jpg">
    <h1>:: REGISTER ::</h1>
    <form @submit.prevent="submit">
      <span>Email:</span>
      <input type="email" value="Enter Username" v-model='email'>
      <br><br>
      <span>Password:</span>
      <input type="password" value="Enter Password" v-model='password'>
      <button type="submit">Enviar</button>
      <br><br>
      <span>You have account?</span><a href="login">Login</a>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    submit() {
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIQdZRgQfars_XsSvs5Z5Eu4S7tGchyCA', {
        email: this.email,
        password: this.password,
        returnSecureToken: true,
      })
      .then((res) => console.log(res))
      .catch((res) => console.log("Fail",res));
    },
  },
};
</script>
<style scoped>
#register {
  color: #29d438;
  position: center;
  box-sizing: border-box;
}
h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}
.register p {
  margin: 0;
  padding: 0;
  font-weight: bold;
}
.register input {
  width: 100%;
  margin-bottom: 20px;
}
.register input[type="email"],input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: rgb(192, 66, 182);
  font-size: 16px;
}
.register button[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: #fb2525;
  color: #fff;
  font-size: 18px;
  width: 250px;
  border-radius: 20px;
}
.register button[type="submit"]:hover {
  cursor: pointer;
  background: #ffc107;
  color: #000;
}
@media (min-width: 375px) and (max-width: 1079px){
  #register{
    margin-top: 30px;
    margin-left: 50px;
  }
  #register img{
    margin-top: 5px;
    width: 150px; 
    height: 100px;
  }
}
@media (min-width: 1080px){
  #register{
    margin-top: 20px;
    margin-left: 45px;
  }
  #register img{
    margin-top: 10px;
    width: 200px; 
    height: 200px;
  }
}
</style>