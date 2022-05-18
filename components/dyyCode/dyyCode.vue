/**
*@name:dyyCode
*@author:dingyongya
*@date:2022/5/18 15:46
*@update:2022/5/18 15:46
*/

<template>
  <div class="dyy_code">
    <height-transition>
      <div
        v-show="codeContent"
        ref="codeContent"
        class="dyy_code_content"
      >
        <slot />
      </div>
    </height-transition>
    <div
      class="dyy_code_footer"
      @click="handleExpand"
    >
      <i :class="codeContent? 'el-icon-caret-top': 'el-icon-caret-bottom'" />
    </div>
  </div>
</template>

<script>
import heightTransition from './utils'
export default {
  name: "DyyCode",
  components: {heightTransition},
  data() {
    return {
      codeContent: false,
    }
  },
  methods: {
    handleExpand() {
     this.codeContent = !this.codeContent
    }
  }
}
</script>

<style scoped lang="scss">
.dyy_code{
  overflow: hidden;
  margin: 10px 0;
  border: 1px #dedede solid;
  .dyy_code_footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    cursor: pointer;
    i{
      color: #ebedf0;
    }
    &:hover{
      i{
        color: #2d2d2d;
      }
    }
  }
}
</style>