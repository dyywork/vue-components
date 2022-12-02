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
          </el-form-item>
        </el-col>
      </template>
      <el-col :span="6" class="button_col">
        <el-form-item label-width="0" class="button_content">
          <el-button type="primary"> 查询 </el-button>
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
    };
  },
  methods: {},
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
.button_col {
  float: right;
}
</style>
