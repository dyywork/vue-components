::: anchor
:::

::: title 基本用法
:::

::: demo

<template>
  <el-card shadow="never">
    <dyy-search-form
      :form-item-list="formItemLists"
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
        formItemLists: [
          {type: "input", label: "input", model: 'test',initialValue: null, span: 6},
          {
            type: "select", 
            label: "select", 
            model: 'test1',
            initialValue: null, 
            options: [
              {value: 'A', label: 'name'},
              {value: 'B', label: 'name1'},
              {value: 'C', label: 'name2'},
            ],
          },
          {
            type: "select", 
            label: "selectMultiple", 
            model: 'test2',
            initialValue: [],
            options: [
              {value: 'A', label: 'name'},
              {value: 'B', label: 'name1'},
              {value: 'C', label: 'name2'},
            ],
          },
          {
            type: "date", 
            label: "日期",
            model: 'test3',
            initialValue: null,
            attrs: {
              type: 'date'
            },
            span: 6
          },
          {
            type: "date", 
            label: "日期区间",
            model: 'test4',
            initialValue: [],
            attrs: {
              type: 'daterange'
            },
            span: 12
          },
          {
            type: "date", 
            label: "月份区间",
            model: 'test5',
            initialValue: [],
            attrs: {
              type: 'monthrange'
            },
          },
          {type: "input", label: "名称6", model: 'test6',initialValue: null, span: 6},
          {type: "input", label: "名称7", model: 'test7',initialValue: null, span: 6},
          {type: "input", label: "名称8", model: 'test8',initialValue: null, span: 6},
          {type: "input", label: "名称9", model: 'test9',initialValue: null, span: 6},
        ],
        count: 0,
        msg: '123'
      }
    },
    watch: {
      count: function (val, oldVal) {
        console.log(val)
      },
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeDestroy() {},
    methods: {
      handleSearch(data) {
          console.log(data);
      }
    }
}
</script>

:::

::: title 测试
:::

::: demo

<template>
  <el-card shadow="never">
    <dyy-search-form
      :form-item-list="formItemList"
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
        formItemList: [
          {type: "input", label: "名称", model: 'test',initialValue: null, span: 6},
          {type: "input", label: "名称1", model: 'test1',initialValue: null, span: 6},
          {type: "input", label: "名称2", model: 'test2',initialValue: null, span: 6},
          {type: "input", label: "名称3", model: 'test3',initialValue: null, span: 6},
          {type: "input", label: "名称4", model: 'test4',initialValue: null, span: 6},
          {type: "input", label: "名称5", model: 'test5',initialValue: null, span: 6},
          {type: "input", label: "名称6", model: 'test6',initialValue: null, span: 6},
          {type: "input", label: "名称7", model: 'test7',initialValue: null, span: 6},
          {type: "input", label: "名称8", model: 'test8',initialValue: null, span: 6},
          {type: "input", label: "名称9", model: 'test9',initialValue: null, span: 6},
        ],
        count: 0,
        msg: '123'
      }
    },
    watch: {
      count: function (val, oldVal) {
        console.log(val)
      },
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeDestroy() {},
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

| Tables        | Are           | Cool  |
| :------ |:-------------| :-----|
| col 3 is | right-aligned | `true` |
| col 2 is | centered      |   $12 |
| zebra stripes| are neat |    $1 |

:::

