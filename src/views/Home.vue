<template>
  <div class="home">
    <el-button
      type="primary"
      @click="goIndex"
    >
      开始
    </el-button>
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
<style scoped>
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
