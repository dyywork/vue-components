/**
*@name:dyyTooltip
*@author:dingyongya
*@date:2022/6/16 13:17
*@update:2022/6/16 13:17
*/

<template>
  <el-tooltip
    v-bind="$attrs"
    :disabled="disabled"
  >
    <div
      ref="dyyTooltipContent"
      class="dyy-tooltip-content"
    >
      <slot />
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: "DyyTooltip",
  props: {

  },
  data() {
    return {
      disabled: true
    }
  },
  mounted() {
    const elWidth = this.$refs.dyyTooltipContent.offsetWidth;
    const childWidth = this.$refs.dyyTooltipContent.firstChild.offsetWidth
    if (childWidth > elWidth){
      this.disabled = false
    }
  }
}
</script>

<style scoped lang="scss">
.dyy-tooltip-content{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
</style>