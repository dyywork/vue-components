# 123


<div>
    <mg-search-form></mg-search-form>
<el-button>tse</el-button>
{{msg}}
</div>

<script>
export default {
    data() {
        return {
            msg: 'msg1'
        }
    }
}
</script>

<div>
    <mg-search-form></mg-search-form>
<el-button>tse</el-button>
{{msg}}
</div>

<script>
export default {
    data() {
        return {
            msg: 'msg1'
        }
    }
}
</script>

```html
<div>
    <mg-search-form></mg-search-form>
<el-button>tse</el-button>
{{msg}}
</div>

<script>
export default {
    data() {
        return {
            msg: 'msg1'
        }
    }
}
</script>
```

| 属性                | 描述                                                                                                                                                  | 类型    | 默认值 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| data                | 表格数据                                                                                                                                              | Array   | []     |
| columns             | 表格列数据                                                                                                                                            | Array   | []     |
| show-footer         | 是否显示表格底部合计行                                                                                                                                | Boolean | false  |
| amount-columns      | 合计金额对应的列字段                                                                                                                                  | Array   | []     |
| quantity-columns    | 合计数量对应的列字段                                                                                                                                  | Array   | []     |
| searchable          | 是否可以筛选                                                                                                                                          | Boolean | false  |
| configurable        | 是否可以配置列                                                                                                                                        | Boolean | false  |
| keyboard            | 是否可以回车换行                                                                                                                                      | Boolean | false  |
| filters-form        | 当 searchable = true 时需要表头过滤的参数字段 (这里过滤参数的 key 值需要和列对应的 prop 一致)                                                         | Object  | {}     |
| checkbox-column-off | 当有选择框的时候，点击行选中，若某列不想作为点击选中的时候需要传入列对应的 prop(复选列，序号列，没有 prop 的列会自动过滤，带有输入框的需要手动传入下) | Array   | []     |
| check-row-keys      | 默认勾选指定行（只会在初始化时被触发一次，需要有 row-id）                                                                                             | Array   | []     |
| disabled-list       | 默认指定行不能勾选（只会在初始化时被触发一次，需要有 row-id）                                                                                         | Array   | []     |
| multipleSort        | 是否开启多字段组合排序，默认 false                                                                                                                    | Boolean | false  |
| sortRemote          | 是否开启服务端排序，默认 true                  