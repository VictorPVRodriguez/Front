<template>
  <div style="display:flex">
    <div class="carrinho">
      <img alt="" src="">
      <Car msg=""/>
    </div>
  </div>
</template>
<script>
import Car from '@/components/Car.vue'
export default {
  name: 'carrinho',
  components: {
    Car
  }
}
</script>