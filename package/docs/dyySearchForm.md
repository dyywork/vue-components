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
      @handle-search="handleSearch">
    </dyy-search-form>
  </el-card>
</template>
<script>
	export default {
    data() {
      return {
        itemList: [
          {type: "input", label: "输入框", prop: 'test', initialValue: null, placeholder: '请输入', span: 6},
          {
            type: "select", 
            label: "选择框",
            prop: 'test1', 
            options:[
              {label: '选择1', value: 'select1'},
              {label: '选择2', value: 'select2'},
            ], 
            initialValue: null,
            placeholder: '请选择',
            span: 6
          },
          {
            type: "select", 
            label: "多选择框",
            prop: 'test2', 
            options:[
              {label: '选择1', value: 'select1'},
              {label: '选择2', value: 'select2'},
              {label: '选择3', value: 'select3'},
              {label: '选择4', value: 'select4'},
            ], 
            initialValue: [],
            multiple: true,
            collapseTags: true,
            placeholder: '请选择',
            span: 6
          },
          {
            type: "select", 
            label: "远程加载",
            prop: 'test4', 
            options:[], 
            initialValue: [],
            multiple: true,
            collapseTags: true,
            filterable: true,
            remote: true,
            remoteMethod: (key) => this.remoteMethod(key, 'test4'),
            reserveKeyword: true,
            placeholder: '请选择',
            span: 6
          },
          {type: "input", label: "输入框", prop: 'test5', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test6', initialValue: null, placeholder: '请输入', span: 6},
          {type: "input", label: "输入框", prop: 'test7', initialValue: null, placeholder: '请输入'},
          {type: "input", label: "输入框", prop: 'test8', initialValue: null, placeholder: '请输入', span: 6},
        ],
        queryForm: {
          size: 20,
          page: 1,
        },
      }
    },
    mounted() {
      this.$message.success('加载测试'); 
      this.getList({page:1, size:50}).then(res => {
        console.log(res);
      });
      this.remoteMethod('', 'test4')
    },
    methods: {
      handleSearch(data) {
        console.log(data);
      },
      async remoteMethod(key, prop) {
        const {list} = await this.getList(this.queryForm);
        this.itemList.forEach(item => {
          if(item.prop === prop) {
            item.options = list
          }
        })
      },
      getList({page, size}) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.$DUI.mock({
                  ['list|'+ size]: [
                    {
                      'id|+1': 1,
                      'value|+1': 1000* page,
                      'label':'@cname',
                    }
                  ],
                  page,
                  size,
                  total: page* size,
              }))
          }, 1000)
        })
      }
    }
}
</script>

:::

::: title 属性
:::

::: table

| 参数        | 描述               | 类型     | 可选值 | 默认值 |
| :---------- | :----------------- | :------- | :----: | :----: |
| `item-list` | 搜索表单主数据配置 | `Array`  |   --   |   []   |
| `row`       | 最多展示几行       | `number` |   --   |   2    |

:::

::: title itemList
:::

::: table

| 参数           | 描述                | 类型     | 可选值 | 默认值 |
| :------------- | :------------------ | :------- | :----: | :----: |
| `type`         | 表单控件类型        | `String` |   --   |   --   |
| `prop`         | 表单控件 v-model 值 | `String` |   --   |   --   |
| `label`        | 表单控件名称        | `String` |   --   |   --   |
| `initialValue` | 表单控件初始值      | --       |   --   |   --   |
| `span`         | 表单控件每行占比    | `Number` |   --   |   6    |

:::
