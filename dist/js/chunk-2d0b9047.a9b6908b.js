(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9047"],{"30c7":function(e,t,l){"use strict";l.r(t);var n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"markdown"},[l("html",[l("head"),l("body",[l("dyy-anchor",{attrs:{"anchor-list":"基本用法,属性,测试"}}),l("dyy-title",{attrs:{"title-name":"基本用法"}}),l("div",{staticClass:"flex_col"},[l("dyy-code",{scopedSlots:e._u([{key:"code",fn:function(){return[e._v('<template> <el-card shadow="never"> <mg-search-form :form-item-list="formItemLists" :row="2" size="mini" label-width="100px" @get-search-form-data="handleSearch"> </mg-search-form> </el-card> </template> <script> export default { data() { return { formItemLists: [ {type: "input", label: "名称", model: \'test\',initialValue: null, span: 6}, {type: "input", label: "名称1", model: \'test1\',initialValue: null, span: 6}, {type: "input", label: "名称2", model: \'test2\',initialValue: null, span: 6}, {type: "input", label: "名称3", model: \'test3\',initialValue: null, span: 6}, {type: "input", label: "名称4", model: \'test4\',initialValue: null, span: 6}, {type: "input", label: "名称5", model: \'test5\',initialValue: null, span: 6}, {type: "input", label: "名称6", model: \'test6\',initialValue: null, span: 6}, {type: "input", label: "名称7", model: \'test7\',initialValue: null, span: 6}, {type: "input", label: "名称8", model: \'test8\',initialValue: null, span: 6}, {type: "input", label: "名称9", model: \'test9\',initialValue: null, span: 6}, ], count: 0, msg: \'123\' } }, watch: { count: function (val, oldVal) { console.log(val) }, }, beforeCreate() { console.log(\'beforeCreate\'); }, beforeMount() { console.log(\'beforeMount\'); }, mounted() { console.log(\'mounted\'); }, beforeDestroy() {}, methods: { handleSearch(data) { console.log(data); } } } <\/script> ')]},proxy:!0}])},[l("pre",{pre:!0},[l("code",[e._v('<template>\n  <el-card shadow="never">\n    <mg-search-form\n      :form-item-list="formItemLists"\n      :row="2"\n      size="mini"\n      label-width="100px"\n      @get-search-form-data="handleSearch">\n    </mg-search-form>\n  </el-card>\n</template>\n<script>\n\texport default {\n    data() {\n      return {\n        formItemLists: [\n          {type: "input", label: "名称", model: \'test\',initialValue: null, span: 6},\n          {type: "input", label: "名称1", model: \'test1\',initialValue: null, span: 6},\n          {type: "input", label: "名称2", model: \'test2\',initialValue: null, span: 6},\n          {type: "input", label: "名称3", model: \'test3\',initialValue: null, span: 6},\n          {type: "input", label: "名称4", model: \'test4\',initialValue: null, span: 6},\n          {type: "input", label: "名称5", model: \'test5\',initialValue: null, span: 6},\n          {type: "input", label: "名称6", model: \'test6\',initialValue: null, span: 6},\n          {type: "input", label: "名称7", model: \'test7\',initialValue: null, span: 6},\n          {type: "input", label: "名称8", model: \'test8\',initialValue: null, span: 6},\n          {type: "input", label: "名称9", model: \'test9\',initialValue: null, span: 6},\n        ],\n        count: 0,\n        msg: \'123\'\n      }\n    },\n    watch: {\n      count: function (val, oldVal) {\n        console.log(val)\n      },\n    },\n    beforeCreate() {\n        console.log(\'beforeCreate\');\n    },\n    beforeMount() {\n        console.log(\'beforeMount\');\n    },\n    mounted() {\n        console.log(\'mounted\');\n    },\n    beforeDestroy() {},\n    methods: {\n      handleSearch(data) {\n          console.log(data);\n      }\n    }\n}\n<\/script>\n')])])]),[l("el-card",{attrs:{shadow:"never"}},[l("mg-search-form",{attrs:{"form-item-list":e.formItemLists,row:2,size:"mini","label-width":"100px"},on:{"get-search-form-data":e.handleSearch}})],1)]],2),l("dyy-title",{attrs:{"title-name":"属性"}}),e._m(0),l("dyy-title",{attrs:{"title-name":"测试"}}),l("div",{staticClass:"flex_col"},[l("dyy-code",{scopedSlots:e._u([{key:"code",fn:function(){return[e._v('<template> <el-card shadow="never"> <mg-search-form :form-item-list="formItemList" :row="2" size="mini" label-width="100px" @get-search-form-data="handleSearch"> </mg-search-form> </el-card> </template> <script> export default { data() { return { formItemList: [ {type: "input", label: "名称", model: \'test\',initialValue: null, span: 6}, {type: "input", label: "名称1", model: \'test1\',initialValue: null, span: 6}, {type: "input", label: "名称2", model: \'test2\',initialValue: null, span: 6}, {type: "input", label: "名称3", model: \'test3\',initialValue: null, span: 6}, {type: "input", label: "名称4", model: \'test4\',initialValue: null, span: 6}, {type: "input", label: "名称5", model: \'test5\',initialValue: null, span: 6}, {type: "input", label: "名称6", model: \'test6\',initialValue: null, span: 6}, {type: "input", label: "名称7", model: \'test7\',initialValue: null, span: 6}, {type: "input", label: "名称8", model: \'test8\',initialValue: null, span: 6}, {type: "input", label: "名称9", model: \'test9\',initialValue: null, span: 6}, ], count: 0, msg: \'123\' } }, watch: { count: function (val, oldVal) { console.log(val) }, }, beforeCreate() { console.log(\'beforeCreate\'); }, beforeMount() { console.log(\'beforeMount\'); }, mounted() { console.log(\'mounted\'); }, beforeDestroy() {}, methods: { handleSearch(data) { console.log(data); } } } <\/script> ')]},proxy:!0}])},[l("pre",{pre:!0},[l("code",[e._v('<template>\n  <el-card shadow="never">\n    <mg-search-form\n      :form-item-list="formItemList"\n      :row="2"\n      size="mini"\n      label-width="100px"\n      @get-search-form-data="handleSearch">\n    </mg-search-form>\n  </el-card>\n</template>\n<script>\n\texport default {\n    data() {\n      return {\n        formItemList: [\n          {type: "input", label: "名称", model: \'test\',initialValue: null, span: 6},\n          {type: "input", label: "名称1", model: \'test1\',initialValue: null, span: 6},\n          {type: "input", label: "名称2", model: \'test2\',initialValue: null, span: 6},\n          {type: "input", label: "名称3", model: \'test3\',initialValue: null, span: 6},\n          {type: "input", label: "名称4", model: \'test4\',initialValue: null, span: 6},\n          {type: "input", label: "名称5", model: \'test5\',initialValue: null, span: 6},\n          {type: "input", label: "名称6", model: \'test6\',initialValue: null, span: 6},\n          {type: "input", label: "名称7", model: \'test7\',initialValue: null, span: 6},\n          {type: "input", label: "名称8", model: \'test8\',initialValue: null, span: 6},\n          {type: "input", label: "名称9", model: \'test9\',initialValue: null, span: 6},\n        ],\n        count: 0,\n        msg: \'123\'\n      }\n    },\n    watch: {\n      count: function (val, oldVal) {\n        console.log(val)\n      },\n    },\n    beforeCreate() {\n        console.log(\'beforeCreate\');\n    },\n    beforeMount() {\n        console.log(\'beforeMount\');\n    },\n    mounted() {\n        console.log(\'mounted\');\n    },\n    beforeDestroy() {},\n    methods: {\n      handleSearch(data) {\n          console.log(data);\n      }\n    }\n}\n<\/script>\n')])])]),[l("el-card",{attrs:{shadow:"never"}},[l("mg-search-form",{attrs:{"form-item-list":e.formItemList,row:2,size:"mini","label-width":"100px"},on:{"get-search-form-data":e.handleSearch}})],1)]],2)],1)])])},a=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"dyy_table"},[l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[e._v("Tables")]),l("th",{staticStyle:{"text-align":"center"}},[e._v("Are")]),l("th",{staticStyle:{"text-align":"center"}},[e._v("Cool")])])]),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[e._v("col 3 is")]),l("td",{staticStyle:{"text-align":"center"}},[e._v("right-aligned")]),l("td",{staticStyle:{"text-align":"center"}},[l("code",{pre:!0},[e._v("true")])])]),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[e._v("col 2 is")]),l("td",{staticStyle:{"text-align":"center"}},[e._v("centered")]),l("td",{staticStyle:{"text-align":"center"}},[e._v("$12")])]),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[e._v("zebra stripes")]),l("td",{staticStyle:{"text-align":"center"}},[e._v("are neat")]),l("td",{staticStyle:{"text-align":"center"}},[e._v("$1")])])])])])}],i={data:function(){return{formItemLists:[{type:"input",label:"名称",model:"test",initialValue:null,span:6},{type:"input",label:"名称1",model:"test1",initialValue:null,span:6},{type:"input",label:"名称2",model:"test2",initialValue:null,span:6},{type:"input",label:"名称3",model:"test3",initialValue:null,span:6},{type:"input",label:"名称4",model:"test4",initialValue:null,span:6},{type:"input",label:"名称5",model:"test5",initialValue:null,span:6},{type:"input",label:"名称6",model:"test6",initialValue:null,span:6},{type:"input",label:"名称7",model:"test7",initialValue:null,span:6},{type:"input",label:"名称8",model:"test8",initialValue:null,span:6},{type:"input",label:"名称9",model:"test9",initialValue:null,span:6}],count:0,msg:"123",formItemList:[{type:"input",label:"名称",model:"test",initialValue:null,span:6},{type:"input",label:"名称1",model:"test1",initialValue:null,span:6},{type:"input",label:"名称2",model:"test2",initialValue:null,span:6},{type:"input",label:"名称3",model:"test3",initialValue:null,span:6},{type:"input",label:"名称4",model:"test4",initialValue:null,span:6},{type:"input",label:"名称5",model:"test5",initialValue:null,span:6},{type:"input",label:"名称6",model:"test6",initialValue:null,span:6},{type:"input",label:"名称7",model:"test7",initialValue:null,span:6},{type:"input",label:"名称8",model:"test8",initialValue:null,span:6},{type:"input",label:"名称9",model:"test9",initialValue:null,span:6}]}},watch:{count:function(e,t){console.log(e)}},computed:{},methods:{handleSearch:function(e){console.log(e)}},beforeCreate:function(){console.log("beforeCreate"),console.log("beforeCreate")},created:function(){},beforeMount:function(){console.log("beforeMount"),console.log("beforeMount")},mounted:function(){console.log("mounted"),console.log("mounted")}},o=i,s=l("2877"),u=Object(s["a"])(o,n,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b9047.a9b6908b.js.map