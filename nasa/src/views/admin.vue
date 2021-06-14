<template>
    <div class="form">
        <h3>:: VENDA DE CÃES ::</h3>
        <form @submit.prevent="submit">
            <span>Raça: </span>
            <input type="nome" v-model='nome'>
            <br><br>
            <span>Preço: </span>
            <input type="preco" v-model='preco'>
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
            nome:'',
            preco:''
        }
    },
    methods:{
        submit(){
            axios.put('https://dog-vue-d838b-default-rtdb.europe-west1.firebasedatabase.app/.json?auth='+ this.$store.state.user.idToken,
            [...this.$store.state.venda,{
                nome: this.nome,
                preco: this.preco,
                foto: '',
                email: this.$store.user.email
            }])
                .then(
                    res => console.log(res)
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