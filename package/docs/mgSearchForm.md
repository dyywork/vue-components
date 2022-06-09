::: title
基本用法
:::

::: demo

<el-card shadow="never">
  <mg-search-form
    :form-item-list="formItemList"
    :row="2"
    inline size="mini"
    @get-search-form-data="getSearchFormData">
  </mg-search-form>
<el-table :data="formItemList" border>
<el-table-column label="name">
  <template #default="scope">
    {{scope.row.label}}
  </template>
</el-table-column>
</el-table>
{{count}}
<el-button @click="goCount">test</el-button>
</el-card>
<script>
    export default {
      data() {
        return {
          formItemList: [
            {type: "input", label: "名称", model: 'test',initialValue: null, span: 6}
          ],
          count: 0,
          msg: '123'
        }
      },
      watch: {
          count: function (val,oldVal) {
            console.log(val);
          },
        },
        created() {
            console.log(2);
            console.log(this.count)
        },
        methods: {
          getSearchFormData(data) {
              console.log(data);
          },
          goCount() {
            this.count++
          }
        }
    }
</script>
<style scope>
    .red{
        color: red;
    }
</style>
:::

::: title
高级筛选
:::


::: demo

<el-card shadow="never">
    <mg-search-form
        :form-item-list="formItemLists"
        :row="2"
        size="mini"
				label-width="100px"
        @get-search-form-data="handleSearch">
    </mg-search-form>
<el-button @click="msg++">{{msgs}}</el-button>
</el-card>
<script>
    export default {
      data() {
        return {
          formItemLists: [
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
          msg: 1
        }
      },
        watch: {
          msg: function (val, oldVal) {
            console.log(oldVal);
          }
        },
        computed: {
          msgs: function (){
            return this.msg + 3;
          },
        },
        beforeCreate() {
            console.log('beforeCreate')
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted() {
            console.log('mounted')
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