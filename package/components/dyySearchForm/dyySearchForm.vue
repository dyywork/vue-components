<template>
  <el-form
    ref="form"
    :model="form"
    label-width="80px"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-row>
      <template v-for="(item, index) in itemList">
        <el-col
          v-show="(index + 1) * 6 < row * 24 || expand"
          :key="item.prop"
          :span="item.span || 6"
        >
          <el-form-item :label="item.label" :prop="item.prop">
            <el-input
              v-if="item.type === 'input'"
              v-model="form[item.prop]"
              v-bind="item"
            />
            <el-input
              v-if="item.type === 'inputNumber'"
              v-model="form[item.prop]"
              v-number-input:item.arg="item.numberAttrs"
              type="number"
              v-bind="item"
            />
            <el-select
              v-if="item.type === 'select'"
              v-model="form[item.prop]"
              v-loadMore:handleLoadMore="item"
              v-bind="item"
              class="width_100"
            >
              <el-option
                v-for="temp in item.options"
                :key="temp.value"
                :label="temp.label"
                :value="temp.value"
              >
              </el-option>
            </el-select>
            <el-date-picker
              v-if="item.type === 'date'"
              v-model="form[item.prop]"
              :type="item.dateType"
              class="width_100"
              v-bind="item"
            >
            </el-date-picker>
            <el-radio-group
              v-if="item.type === 'radio'"
              v-model="form[item.prop]"
            >
              <el-radio
                v-for="temp in item.options"
                :key="temp.value"
                :label="temp.value"
              >
                {{ temp.label }}
              </el-radio>
            </el-radio-group>
            <el-checkbox-group
              v-if="item.type === 'checkbox'"
              v-model="form[item.prop]"
            >
              <el-checkbox
                v-for="temp in item.options"
                :key="temp.value"
                :label="temp.value"
              >
                {{ temp.label }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="6" class="button_col">
        <el-form-item label-width="0" class="button_content">
          <el-button type="primary" @click="handleSearch"> 查询 </el-button>
          <el-button>重置</el-button>
          <el-button v-if="!expand" type="text" @click="expand = true">
            更多<i class="el-icon-arrow-down" />
          </el-button>
          <el-button v-else type="text" @click="expand = false">
            收起<i class="el-icon-arrow-up" />
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "DyySearchForm",
  directives: {
    loadMore: {
      bind: function (el, binding, vnode) {
        const that = vnode.context;
        const selectWrap_dom = el.querySelector(
          ".el-select-dropdown .el-select-dropdown__wrap"
        );
        selectWrap_dom.addEventListener("scroll", function () {
          const condition =
            this.scrollHeight - this.scrollTop <= this.clientHeight;
          if (condition) {
            that[binding.arg](binding.value);
          }
        });
      },
    },
  },
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
    row: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      form: {},
      expand: false,
      expandIndex: 0,
      selectLoading: false,
    };
  },
  created() {
    const formObj = {};
    this.itemList.forEach((item) => {
      formObj[item.prop] = item.initialValue;
    });
    this.form = formObj;
  },
  methods: {
    // 查询
    handleSearch() {
      this.$emit("handle-search", this.form);
    },
    handleLoadMore(item) {},
  },
};
</script>

<style scoped lang="scss">
.button_content {
  ::v-deep {
    .el-form-item__content {
      display: flex;
      justify-content: right;
    }
  }
}
.width_100 {
  width: 100% !important;
}
.button_col {
  float: right;
}
::v-deep {
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
