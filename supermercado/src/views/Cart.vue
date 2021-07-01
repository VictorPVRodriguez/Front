<template>
  <div style="display:flex">
    <div class="cart">  
      <div v-for="(item, index) in $store.state.cart" :key="index">
        <app-card lagura="520px">
          <div v-if="!!$store.getters.productsSells.find((res)=>item.includes(res))"></div>
            <button>$$$ Buy $$$</button>
          <br/>
          <img :src="item" alt="250">
        </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import appCard from "@/components/app-card.vue"
export default {
  components: {
    appCard
  }
}
</script>