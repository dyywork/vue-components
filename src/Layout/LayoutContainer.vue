/**
*@name:LayoutContainer
*@author:dingyongya
*@date:2022/5/28 9:46
*@update:2022/5/28 9:46
*/

<template>
  <el-container>
    <el-header>
      <header class="dyy_header">
        <div class="header_logo">
          <img
            style="height: 30px"
            src="../assets/logo.png"
            @click="goHome"
          >
        </div>

        <el-menu
          default-active="/index"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#409EFF"
          @select="handleSelect"
        >
          <el-menu-item index="/index">
            首页
          </el-menu-item>
        </el-menu>
      </header>
    </el-header>
    <el-container>
      <router-view />
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "LayoutContainer",
  data() {
    return {
      count: 0
    }
  },
  computed: {
    isAdd() {
      return true
    }
  },
  watch: {
    count: {
      handler() {

      }
    }
  },
  methods: {
    goHome() {
      if (this.$route.path === '/') return
      this.$router.push('/')
    },
    handleSelect(key, keyPath) {
      if (this.$route.path === '/index') return
      this.$router.push({path: key})
    }
  }
}
</script>

<style scoped lang="scss">
.el-header{
  background-color: #ffffff;
  border-bottom: 1px #EBEEF5 solid;
  .dyy_header{
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 100%;
    color: #409EFF;
    .header_logo{
      width: 180px;
    }
  }
  img{
    cursor: pointer;
  }
}
</style>