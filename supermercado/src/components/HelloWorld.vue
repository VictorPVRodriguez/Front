<template>
  <div class="home">
    <div class="carousel">
      <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"  img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide caption="Welcome" text="The first Walmart in Portugal." img-src="../assets/walmart_1.jpg"></b-carousel-slide>
        <b-carousel-slide caption="The best prices this week" img-src="../assets/sales.png"></b-carousel-slide>
        <b-carousel-slide caption="Take a look at our store" img-src="../assets/wproducts.jpg"></b-carousel-slide>
        <b-carousel-slide caption="Join us" text="See all we can offer." img-src="../assets/wexterior.jpg"></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>