<template>
  <div
    class="home"
    :style="note"
  >
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
  data() {
    return {
      note: {
        backgroundImage: "url(" + require("../assets/one.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }
    }
  },
  computed: {
    pageType() {
      return 'test'
    }
  },
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
