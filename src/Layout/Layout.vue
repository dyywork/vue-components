/** *@name:Layout *@author:dingyongya *@date:2022/5/9 19:56 *@update:2022/5/9
19:56 */

<template>
  <el-container>
    <el-aside width="200px" class="aside">
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
  components: { menuSide },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener("dblclick", (e) => {
        if (
          !navigator.clipboard ||
          e.target.tagName !== "CODE" ||
          e.target.parentElement.cellIndex !== 0
        ) {
          return;
        }

        navigator.clipboard
          .writeText(e.target.innerHTML)
          .then(() => {
            this.$message.success(`复制成功: ${e.target.innerHTML}`);
          })
          .catch((err) => {
            console.log("Something went wrong", err);
          });
      });
    });
  },
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
