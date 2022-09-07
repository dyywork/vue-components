<template>
  <div
    class="home"
  >
    <section>
      <el-button
        type="primary"
        @click="goIndex"
      >
        开始
      </el-button>
    </section>

    <dyy-canvas />
  </div>
</template>

<script>
import DyyCanvas from "../components/DyyCanvas";
export default {
  name: 'Home',
  components: {DyyCanvas},
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
  //background-color: #ecf4fa;
  section {
    z-index: 1;
  }
}
</style>
