::: anchor
:::


::: title Tooltip
:::

`超出外部dom宽度...时鼠标移入展示所有`

::: demo

<template>
  <div>
    <div style="width: 150px">
      <dyy-tooltip content="测试Tooltip宽度超过后问题" placement="top">
        <span>测试Tooltip宽度超过后问题测试Tooltip宽度超过后问题</span>
      </dyy-tooltip>
    </div>
    <dyy-tooltip content="测试Tooltip宽度超过后问题">
      <p>测试Tooltip宽度超过后问题测试Tooltip宽度超过后问题</p>
    </dyy-tooltip>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>

:::

::: title inputNumber
:::

::: demo

<template>
  <el-form :model="form" inline>
    <el-form-item label="数字:4位小数">
      <el-input v-number-input:4 type="number" v-model="form.value" @input="handleInput"/>
    </el-form-item>
    <el-form-item label="数字">
      <el-input v-number-input type="number" v-model="form.value1" @input="handleInput1"/>
    </el-form-item>
    <el-button @click="submit">提交</el-button>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          value: 0,
          value1: 0,
        }
      }
    },
    methods: {
      submit() {
        console.log(this.form.value);
        console.log(this.form.value1)
      },
      handleInput() {
        console.log(this.form.value)
      },
      handleInput1() {
        console.log(this.form.value1)
      }
    }
  }
</script>

<style scope>
  /* chrome */ 
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button { 
      -webkit-appearance: none; 
  }
  /* 火狐浏览器 */
  input[type="number"]{ 
      -moz-appearance: textfield; 
  }
</style>

:::