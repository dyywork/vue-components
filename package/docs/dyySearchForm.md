::: anchor
:::

::: title 基本用法
:::

::: demo

<template>
  <el-card shadow="never">
    <dyy-search-form
      :item-list="itemList"
      :row="2"
      size="mini"
      label-width="100px"
      @get-search-form-data="handleSearch">
    </dyy-search-form>
  </el-card>
</template>
<script>
	export default {
    data() {
      return {
        itemList: [
          {type: "input", label: "输入框", prop: 'test', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test1', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test2', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test3', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test4', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test5', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test6', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test7', initialValue: null, placeholder: '请输入'},
          {type: "input", label: "输入框", prop: 'test8', initialValue: null, placeholder: '请输入', span: 6},
        ],
      }
    },
    mounted() {
        this.$message.success('加载测试'); 
    },
    methods: {
      handleSearch(data) {
          console.log(data);
      }
    }
}
</script>

:::

::: title 属性
:::

::: table

| 参数        | 描述      |  类型 | 可选值  | 默认值  |
| :------ |:-------------| :-----|:-----:|:------:|
| `item-list` | 搜索表单主数据配置 | `Array`|  -- | [] |
| `row` | 最多展示几行 | `number`|  -- | 2 |

:::

