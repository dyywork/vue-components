/**
*@name:DyyCanvas
*@author:dingyongya
*@date:2022/9/7 14:27
*@update:2022/9/7 14:27
*/

<template>
  <canvas
    ref="canvas"
  />
</template>

<script>
export default {
  name: "DyyCanvas",
  data() {
    return {
      width: '2000',
      height: '1000'
    }
  },
  created() {

  },
  mounted() {

    const canvas = this.$refs.canvas
    const ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'green';
    // ctx.fillRect(10, 10, 150, 100);
    // ctx.font = "10px serif";
    // ctx.strokeText("Hello world", 10, 50, 50);
  },
  methods: {
    init() {

    }
  }
}
</script>

<style scoped lang="scss">
canvas {
  position: absolute;
}

</style>