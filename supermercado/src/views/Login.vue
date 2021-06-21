<template>   
  <div class="login">
    <img src="">
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <span>Email: </span>
      <input type="email" value="Enter Username" v-model='email'>
      <br><br>
      <span>Password: </span>
      <input type="password" value="Enter Password" v-model='password'>
      <button type="submit">Enviar</button>
      <br><br>
      <span>Don´t you have an account?</span><a href="register">Register</a>
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return {
      email:'',
      password:''
    }
  },
  methods:{
    submit(){
      axios.post('',{
        email:this.email,
        password: this.password,
        returnSecureToken:true
      }).then(
        res => this.$store.commit('setUser',res.data),
        this.$router.push("/")
      ).catch(
        res => console.log(res)
      )
    }
  }
}
</script>
<style scoped>
#login{
    color:#29d438;
    position: center;
    box-sizing: border-box;
}
h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 22px;
    
}
.login p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.login input{
    width: 100%;
    margin-bottom: 20px;
}
.login input[type="email"], input[type="password"]{
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: rgb(192, 66, 182);
    font-size: 16px;
}
.login button[type="submit"]{
    border: none;
    outline: none;
    height: 40px;
    background: #fb2525;
    color: #fff;
    font-size: 18px;
    width: 250px;
    border-radius: 20px;
}
.login button[type="submit"]:hover{
   cursor: pointer;
   background: #ffc107;
   color: #000; 
}
@media (min-width: 375px) and (max-width: 1079px){
  #login{
    margin-top: 30px;
    margin-left: 50px;
  }
  #login img{
    margin-top: 5px;
    width: 150px; 
    height: 100px;
  }
}
@media (min-width: 1080px){
  #login{
    margin-top: 20px;
    margin-left: 45px;
  }
  #login img{
    margin-top: 10px;
    width: 350px; 
    height: 200px;
  }
}
</style>