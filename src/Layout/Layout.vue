/**
*@name:Layout
*@author:dingyongya
*@date:2022/5/9 19:56
*@update:2022/5/9 19:56
*/

<template>
  <el-container>
    <el-header>
      <header class="dyy_header" />
    </el-header>
    <el-container>
      <el-aside
        width="200px"
        class="aside"
      >
        <menu-side />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
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
.el-header{
  background-color: #ffffff;
  border-bottom: 1px #EBEEF5 solid;
}
.el-main{
  height: calc(100vh - 60px);
}
</style>