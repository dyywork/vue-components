/**
*@name:Layout
*@author:dingyongya
*@date:2022/5/9 19:56
*@update:2022/5/9 19:56
*/

<template>
  <el-container>
    <el-aside
      width="200px"
      class="aside"
    >
      <menu-side />
    </el-aside>
    <el-main class="main-container">
      <router-view />
    </el-main>
    <el-backtop target=".main-container" />
  </el-container>
</template>

<script>
import menuSide from "./menuSide/menuSide";
export default {
  name: "Layout",
  components: {menuSide}
}
</script>

<style scoped lang="scss">
.aside{
  height: calc(100vh - 60px);
  background-color: #fff;
  border-right: 1px #EBEEF5 solid;
}

.el-main{
  height: calc(100vh - 60px);
}
</style>