<template>
  <div class="home">
    <el-button
      type="primary"
      @click="goIndex"
    >
      开始
    </el-button>
    <pre>
        <code class="language-xml line-numbers">&lt;span class="itsicons"&gt;{{ code }}&lt;/span&gt;</code>
      </pre>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      code: `console.log(1)`
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
