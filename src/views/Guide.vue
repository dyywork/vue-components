/** *@name:Guide *@author:dingyongya *@date:2022/12/2 14:35 *@update:2022/12/2
14:35 */

<template>
  <el-container>
    <el-aside width="200px" class="aside">
      <menu-side type="guide"></menu-side>
    </el-aside>
    <el-main class="guide-container ">
      <router-view />
    </el-main>
    <el-backtop target=".guide-container" />
  </el-container>
</template>

<script>
import menuSide from "@src/Layout/menuSide/menuSide";
export default {
  name: "Guide",
  components: {menuSide}
};
</script>

<style scoped lang="scss">
.aside {
  height: calc(100vh - 60px);
  background-color: #fff;
  border-right: 1px #ebeef5 solid;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
}

.el-main {
  height: calc(100vh - 60px);
}
</style>
