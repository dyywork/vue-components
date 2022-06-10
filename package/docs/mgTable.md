::: title
表格
:::

::: demo

<template>
  <el-table :data="list" border fit>
    <el-table-column label="名称">
      <template #default="scope">
        {{scope.row.label}}
      </template>
    </el-table-column>
    <el-table-column label="年龄" prop="age"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      msg: '123',
      list: [{label: '名称', age: 12},{label: '名称', age: 12},{label: '名称', age: 12},]
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

::: demo

<template>
  <el-button>test1</el-button>
</template>
<script>
export default {
  data() {
    return {}
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
}
</script>

:::