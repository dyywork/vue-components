/**
*@name:Layout
*@author:dingyongya
*@date:2022/5/9 19:56
*@update:2022/5/9 19:56
*/

<template>
  <el-container>
    <el-aside width="200px" class="aside">
      <menu-side></menu-side>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
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
  height: 100vh;
  background-color: #fff;
}
</style>