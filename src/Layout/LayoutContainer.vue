/** *@name:LayoutContainer *@author:dingyongya *@date:2022/5/28 9:46
*@update:2022/5/28 9:46 */

<template>
  <el-container>
    <el-header>
      <header class="dyy_header">
        <section class="header_left">
          <div class="header_logo">
            <img
              style="height: 30px"
              src="../assets/logo.png"
              @click="goHome"
            />
          </div>

          <el-menu
            :default-active="menuActive"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#409EFF"
            @select="handleSelect"
          >
            <el-menu-item index="/home"> 首页 </el-menu-item>
            <el-menu-item index="/guide"> 指南 </el-menu-item>
            <el-menu-item index="/components"> 组件 </el-menu-item>
          </el-menu>
        </section>

        <div class="header_right">
          <el-link
            :underline="false"
            href="https://github.com/dyywork/vue-components"
            target="_blank"
          >
            Github
          </el-link>
        </div>
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
  computed: {
    menuActive() {
      if (/components/.test(this.$route.path)) {
        return "/components"
      } else if(/guide/.test(this.$route.path)) {
        return '/guide'
      }else {
        return this.$route.path || "/home"
      }
    },
  },
  methods: {
    goHome() {
      if (this.$route.path === "/home") return;
      this.$router.push("/home");
    },
    handleSelect(key) {
      if (this.$route.path !== key) {
        this.$router.push({ path: key });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.el-header {
  z-index: 10;
  background-color: #ffffff;
  border-bottom: 1px #ebeef5 solid;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  .dyy_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    color: #409eff;
    .header_logo {
      width: 180px;
    }
  }
  .header_left {
    display: flex;
    align-items: center;
  }
  .header_right {
    float: right;
    .theme-btn{
      padding: 10px;
      cursor: pointer;
    }
  }
  img {
    cursor: pointer;
  }
}
</style>
