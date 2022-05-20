::: title
表格
:::

::: demo
<el-card shadow="never">
    <mg-search-form 
        :form-item-list="formItemList" 
        :row="2" 
        inline 
        size="mini" 
        @get-search-form-data="getSearchFormData">
    </mg-search-form>
</el-card>
<script>
    export default {
      data() {
        return {
          formItemList: [
            { type: "input", label: "名称", model: 'test',initialValue: null, span: 6}
          ],
          count: 0
        }
      },
      methods: {
        getSearchFormData(data) {
            console.log(data);
        },
      }
    }
</script>
<style scope>
    .red{
        color: red;
    }
</style>
:::

::: demo
<el-card shadow="never">
<mg-search-form :form-item-list="formItemLists" :row="2" inline size="mini" @get-search-form-data="handleSearch"></mg-search-form>
</el-card>
<script>
    export default {
      data() {
        return {
          formItemLists: [
            {type: "input", label: "名称", model: 'test',initialValue: null, span: 6},
            {type: "input", label: "名称1", model: 'test1',initialValue: null, span: 6},
          ],
          count: 0,
          msg: '123'
        }
      },
      methods: {
        handleSearch(data) {
            console.log(data);
        }
      }
    }
</script>
:::