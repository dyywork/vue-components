/**
*@name:menuSide
*@author:dingyongya
*@date:2022/5/10 20:03
*@update:2022/5/10 20:03
*/

<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item-group
        v-for="item in routes"
        :key="item.name"
      >
        <span slot="title">{{ item.meta.title }}</span>
        <el-menu-item
          v-for="itemRoutes in item.children"
          :key="itemRoutes.name"
          @click="jumpPage(itemRoutes)"
        >
          {{ itemRoutes.meta.title }}
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
import {routes} from '@src/router'

export default {
  name: "MenuSide",
  data() {
    return {
      routes
    }
  },
  methods: {
    jumpPage(item) {
      const {path} = this.$route
      if (path !==item.path) {
        this.$router.push({path: item.path})
      }
    }
  }
}
</script>

<style scoped>

</style>