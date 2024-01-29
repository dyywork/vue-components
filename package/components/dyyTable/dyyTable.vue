<template>
  <div>
    <el-button type="primary" @click="handleTableData">添加数据</el-button>
    <el-button type="primary" @click="handleSelect">添加</el-button>
    <el-button type="primary" @click="handleSelected">已选数据</el-button>
    <el-table
      ref="table"
      :data="tableData"
      border
      row-key="id"
      @selection-change="handleSelectChange"
    >
      <el-table-column type="selection" width="50" reserve-selection />
      <el-table-column prop="id" label="ID" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="age" label="年龄" width="100"></el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        min-width="100"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "DyyTable",
  data() {
    return {
      tableData: [],
      tableData2: [
        {
          id: 1,
          name: "张三",
          age: 18,
          address: "北京市",
        },
        {
          id: 2,
          name: "李四",
          age: 20,
          address: "上海市",
        },
        {
          id: 3,
          name: "王五",
        },
      ],
      selectRows: [],
    };
  },
  methods: {
    handleSelectChange(val) {
      this.selectRows = val;
    },
    handleSelected() {
      console.log(this.selectRows);
    },
    handleSelect() {
      console.log(this.tableData);
      console.log(this.tableData2);
      this.$nextTick(() => {
        this.$refs.table.clearSelection();
        this.tableData2.forEach((item) => {
          this.$refs.table.toggleRowSelection(item, true);
        });
        this.handleTableData();
      });
    },
    handleTableData() {
      this.tableData = [
        {
          id: 1,
          name: "张三",
          age: 18,
          address: "北京市",
        },
        {
          id: 2,
          name: "李四",
          age: 20,
          address: "上海市",
        },
        {
          id: 3,
          name: "王五",
          age: 22,
          address: "广州市",
        },
        {
          id: 4,
          name: "王五1",
          age: 222,
          address: "广州市1",
        },
      ];
    },
  },
};
</script>

<style scoped></style>
