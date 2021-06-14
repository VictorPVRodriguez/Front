<template>
    <div class="form">
        <h3>:: LOGIN ::</h3>
        <form @submit.prevent="submit">
            <span>Email: </span>
            <input type="email" v-model='email'>
            <br><br>
            <span>Password: </span>
            <input type="password" v-model='password'>
            <br><br>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTUmmX3gHj44hrRIubsjMw_juh1cHzEQU',
            {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            })
                .then(
                    res => this.$store.commit('setUser',res.data)
                )
                .catch(
                    res => console.log(res)
                )
        }
    }
}
</script>
<style>
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>