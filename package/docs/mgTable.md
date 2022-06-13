::: anchor
:::


::: title 表格
:::

::: demo

<template>
<div style="position: relative">
 <el-table :data="list" border fit size="mini" height="200">
    <el-table-column label="名称" width="180">
      <template #default="scope">
        {{scope.row.label}}
      </template>
    </el-table-column>
    <el-table-column label="年龄" prop="age"></el-table-column>
  </el-table>
</div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      msg: '123',
      list: [{label: '名称', age: 12},{label: '名称', age: 12},{label: '名称', age: 12},{label: '名称', age: 12},{label: '名称', age: 12},{label: '名称', age: 12},{label: '名称', age: 12},{label: '名称', age: 12},]
    }
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

::: title 编辑表格
:::

::: demo

<template>
  <el-form ref="form" :model="form" size="mini">
    <el-table :data="form.list1" fit size="mini" border>
      <el-table-column label="测试">
       <template #default="{row, $index}">
         <el-form-item>
          <el-input v-model="row.label"/>
        </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="测试1">
       <template #default="{row, $index}">
         <el-form-item :prop="'list1.'+ $index +'.value'" :rules="rules.value">
          <el-input v-model="row.value"/>
        </el-form-item>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" size="mini" @click="submit">提交</el-button>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        list1: [{label: '测试', value: 1},{label: '测试', value: 1},],
      },
      rules: {
        value: [
          {
            required: true,
            message: '请选择类型',
            trigger: 'change'
          }
        ]
      },
    }
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
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(this.form.list1)
        }
      })
    }
  }
}
</script>
<style>
  .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
    margin-bottom: 0px;
  }
</style>
:::