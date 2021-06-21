<template>
  <div class="produtos">
    <Prod msg="Procura todos os produtos que a nossa loja tem para oferecer"/>
  </div>
</template>
<script>
import Prod from '@/components/Prod.vue'
export default {
  name: 'produtos',
  components: {
    Prod
  }
}
</script>