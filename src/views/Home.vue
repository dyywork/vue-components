<template>
  <div class="home">
    <section>
      <img src="../assets/logo_small.png">
      <div class="home-button">
        <el-button
          type="primary"
          @click="goIndex"
        >
          开始
        </el-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goIndex() {
      this.$router.push({path: '/index'})
    }
  }
}
</script>
<style scoped lang="scss">
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  background: url("../assets/bg.svg");
  section {
    display: flex;
    flex-direction: column;
    z-index: 1;
    .home-button{
      display: flex;
      justify-content: center;
    }
  }
}
</style>
