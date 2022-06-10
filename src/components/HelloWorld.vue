<template>
  <div class="hello">
    <slot
      name="test"
      :row="row"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      row: {
        test: 1,
        msg: 'test123'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
