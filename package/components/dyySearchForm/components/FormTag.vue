/**
*@name:FormTag
*@author:dingyongya
*@date:2022/7/20 9:48
*@update:2022/7/20 9:48
*/

<template>
  <section
    v-if="!expandType && hideFormList.length > 0"
    class="form_footer"
  >
    <div class="tag_title">
      已选条件：
    </div>
    <div class="tag_content">
      <el-tag
        v-for="(tag, index) in hideFormList"
        :key="index"
        closable
        size="mini"
        type="info"
        class="tag_box"
        @close="closeTag(tag)"
      >
        <div style="display: inline-block; max-width: 1100px; overflow: hidden; text-overflow: ellipsis">
          <span v-if="['inputSearch', 'input', 'autocomplete', 'number'].includes(tag.type)">
            {{ tag.label }}: {{ tag.value }}
          </span>
          <span v-else-if="tag.type === 'select'">
            {{ tag.label }}: {{ tag.value.map((item) => item.label).toString() }}
          </span>
          <span v-else-if="tag.type === 'daterange'">
            {{ tag.label }}: {{ dayjs(tag.value[0]).format('YYYY-MM-DD') }} 至
            {{ dayjs(tag.value[1]).format('YYYY-MM-DD') }}
          </span>
          <span v-else-if="tag.type === 'datetimerange'">
            {{ tag.label }}: {{ dayjs(tag.value[0]).format('YYYY-MM-DD HH:mm:ss') }} 至
            {{ dayjs(tag.value[1]).format('YYYY-MM-DD HH:mm:ss') }}
          </span>
          <span v-else-if="tag.type === 'monthrange'">
            {{ tag.label }}: {{ dayjs(tag.value[0]).format('YYYY-MM') }} 至
            {{ dayjs(tag.value[1]).format('YYYY-MM') }}
          </span>
          <span v-else-if="tag.type === 'dates'">
            {{ tag.label }}: {{ tag.value.map((item) => dayjs(item).format('YYYY-MM-DD')).toString() }}
          </span>
          <span v-else-if="tag.type === 'week'">{{ tag.label }}: {{ tag.value }}</span>
          <span v-else-if="tag.type === 'date'">{{ tag.label }}: {{ dayjs(tag.value).format('YYYY-MM-DD') }}</span>
          <span v-else-if="tag.type === 'range'">{{ tag.label }}: {{ tag.value }}</span>
          <span v-else-if="tag.type === 'radio'">
            {{ tag.label }}: {{ tag.value.map((item) => item.label).toString() }}
          </span>
          <span
            v-else-if="tag.type === 'selectTree'"
            class="selectTreeCon"
          >
            {{ tag.label }}: {{ tag.value.toString() }}
          </span>
        </div>
      </el-tag>
    </div>
    <div class="tag_close">
      <el-button
        type="text"
        @click="handleReset"
      >
        清除
      </el-button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'FormTag',
  props: {
    hideFormList: {
      type: Array,
      default: () => [],
    },
    expandType: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleReset() {
      this.$emit('handleReset')
    },
    closeTag(tag) {
      this.$emit('closeTag', tag)
    },
  },
}
</script>

<style scoped lang="scss">
::v-deep {
  .tag_box {
    display: inline-flex;
    align-items: center;
  }
}
.form_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 20px);
  padding: 4px 10px;
  margin-bottom: 8px;
  overflow: hidden;
  background: rgba(37, 42, 61, 0.03);
  border: 1px #c0c4cc dashed;
  border-radius: 5px;
  .tag_title {
    flex: 0 0 61px;
    font-size: 12px;
  }
  .tag_content {
    flex: 1;
  }
  .tag_close {
    width: 30px;
    font-size: 12px;
  }
}
</style>
