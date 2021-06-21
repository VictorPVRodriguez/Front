<template>
    <div class="form">
        <h3>:: Produtos à venda ::</h3>
        <form @submit.prevent="submit">
            <span>Produto: </span>
            <input type="nome" v-model='nome'>
            <br><br>
            <span>Categoria: </span>
            <input type="categoria" v-model='categoria'>
            <br><br>
            <span>Preço: </span>
            <input type="preco" v-model='preco'>
            <br><br>
            <span>Desconto: </span>
            <input type="desconto" v-model='desconto'>
            <br><br>
            <span>Stock: </span>
            <input type="stock" v-model='stock'>
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
            axios.put(''+ this.$store.state.user.idToken,
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