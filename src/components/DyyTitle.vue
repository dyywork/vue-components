/**
*@name:DyyTitle
*@author:dingyongya
*@date:2022/6/11 17:52
*@update:2022/6/11 17:52
*/

<template>
  <fieldset
    :id="titleName"
    class="dyy_fieldset_title"
  >
    <legend>{{ titleName }}</legend>
  </fieldset>
</template>

<script>
export default {
  name: "DyyTitle",
  props: {
    titleName: {
      type: String,
      default: '',
    }
  },
  mounted() {
    console.log(this.title);
  }
}
</script>

<style scoped>

</style>