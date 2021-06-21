<template>
    <div class="usercard" :style="{'background-color':cor,'width':largura}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'usercard',
    props: {
        cor: String,
        largura: {
            default: '16%',
            type: String
        }
    }
}
</script>
<style>
    .usercard{
        border-radius: 20px;
        box-shadow: 10px 10px 0px rgba(0,0,0,0.25);
        padding: 10px 10px 10px;
        margin: 5px 5px 20px;
    }
</style>