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
      :class="['dyy_code_footer',codeContent? 'dyy_code_border dyy_code_footer_fixed' : '']"
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
  margin-top: 10px;
  border-radius: 4px;
  border: 1px #EBEEF5 solid;

  .dyy_code_border{
    border-top: 1px #EBEEF5 solid;
  }
  .dyy_code_footer_fixed{
    position: sticky;
    bottom: -20px;
  }
  .dyy_code_footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 2px);
    height: 40px;
    background-color: #ffffff;
    cursor: pointer;

    i{
      color: #cdd0d7;
      border: 1px solid #cdd0d7;
      border-radius: 10px;
    }
    &:hover{
      i{
        color: #409EFF;
        border: 1px solid #409EFF;
      }
    }
  }
}
</style>