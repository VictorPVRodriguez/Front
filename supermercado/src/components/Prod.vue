<template>
  <div class="produto">
      <h1>{{ msg }}</h1>
      <p></p>
      <h3></h3>
      <ul>
      <li></li>
      </ul>
      <h3></h3>
      <ul>
      <li></li>
      </ul>
      <h3></h3>
      <ul>
      <li></li>
      </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
a {
  color: #42b983;
}
</style>