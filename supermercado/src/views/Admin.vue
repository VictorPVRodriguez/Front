<template>
    <div class="form">
        <h3>:: Goods for sale ::</h3>
        <form @submit.prevent="submit">
            <span>Product: </span>
            <input type="nome" v-model='nome'>
            <br><br>
            <span>Category: </span>
            <input type="categoria" v-model='categoria'>
            <br><br>
            <span>Price: </span>
            <input type="preco" v-model='preco'>
            <br><br>
            <span>Discount: </span>
            <input type="desconto" v-model='desconto'>
            <br><br>
            <span>Stock: </span>
            <input type="stock" v-model='stock'>
            <br><br>
            <button type="submit">Send</button>
        </form>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            nome:'',
            categoria:'',
            preco:'',
            desconto:'',
            stock:''
        }
    },
    methods:{
        submit(){
            axios.put('http://localhost:3000/produtos'+this.$store.state.user.idToken,
            [...this.$store.state.sells,{
                nome: this.nome,
                categoria: this.categoria,
                preco: this.preco,
                desconto: this.desconto,
                stock: this.stock
            }]).then(
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