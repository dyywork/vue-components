/**
*@name:menuSide
*@author:dingyongya
*@date:2022/5/10 20:03
*@update:2022/5/10 20:03
*/

<template>
  <div>
    <el-menu
      :default-active="index"
      class="el-menu-vertical-demo"
    >
      <el-menu-item-group
        v-for="item in routes"
        :key="item.name"
      >
        <span v-if="!type" slot="title">{{ item.meta.title }}</span>
        <el-menu-item
          v-for="itemRoutes in item.children"
          :key="itemRoutes.name"
          :index="itemRoutes.path"
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
import {guideRouter} from '@src/router'

export default {
  name: "MenuSide",
  props: {
    type: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      routes: this.type ? guideRouter: routes,
      index: '/'
    }
  },
  mounted() {
    console.log(guideRouter)
    const {path} = this.$route
    this.index = path
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

<style scoped lang="scss">
::v-deep{
  .el-menu-item-group__title{
    font-size: 18px;
  }
  .el-menu-item{
    height: 40px;
    line-height: 40px;
  }
}

</style>