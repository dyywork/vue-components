/** *@name:mg-paging *@author:dingyongya *@date:2022/11/22 10:35
*@update:2022/11/22 10:35 */

<template>
  <footer class="page_footer">
    <section class="page_footer_left">
      <router-link :to="pageLeft">
        <el-link v-if="nameLeft" icon="el-icon-arrow-left" :underline="false">
          {{ nameLeft }}
        </el-link>
      </router-link>
    </section>
    <section class="page_footer_right">
      <router-link :to="pageRight">
        <el-link :underline="false">
          {{ nameRight
          }}<i v-if="nameRight" class="el-icon-arrow-right el-icon--right"></i>
        </el-link>
      </router-link>
    </section>
  </footer>
</template>

<script>
import { routes } from "../router/index";
export default {
  name: "DyyPage",
  props: {
    pageUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pageLeft: "",
      pageRight: "",
      nameLeft: "",
      nameRight: "",
    };
  },
  mounted() {
    routes[0].children.forEach((item, index) => {
      if (this.$route.path === item.path) {
        if (index !== 0) {
          this.nameLeft = routes[0].children[index - 1].meta.title;
          this.pageLeft = `${routes[0].children[index - 1].path}`;
        }
        if (index !== routes[0].children.length - 1) {
          this.nameRight = routes[0].children[index + 1].meta.title;
          this.pageRight = `${routes[0].children[index + 1].path}`;
        }
      }
    });
  },
};
</script>

<style scoped lang="scss">
.page_footer {
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    &::after {
    }
  }
}
</style>
