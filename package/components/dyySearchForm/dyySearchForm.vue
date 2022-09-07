<template>
  <el-card
    shadow="never"
    class="mg-searc-form"
  >
    <el-form
      ref="form"
      :model="form"
      v-bind="$attrs"
      v-on="$listeners"
      @keydown.enter.native="handleSearch"
    >
      <el-row>
        <template v-for="(item, index) in formItemList">
          <el-col
            v-if="!item.hidden"
            v-show="index <= firstIndex || expandType"
            :key="index"
            :span="(item.type === 'date' && item.attrs.type === 'daterange') || !item.span ? 6 : item.span"
          >
            <el-form-item
              v-if="item.turnLabel"
              v-bind="item"
            >
              <template v-slot:label>
                <el-dropdown @command="(event) => handleCommand(event, item)">
                  <span
                    class="dropdown-label"
                    style="
                      font-size: 12px;
                      cursor: pointer;
                      font-family: PingFang SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial,
                        Hiragino Sans GB, Microsoft Yahei, STHeiti, SimSun, sans-serifsans-serif;
                    "
                  >
                    {{ item.label }}
                    <i class="el-icon-caret-bottom el-icon--right dropdown-icon" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item
                      v-for="(dropdown, dropIndex) in item.attrs.options"
                      :key="dropIndex"
                      :command="dropdown.model"
                    >
                      {{ dropdown.label }}
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
              <el-input
                v-model="form[item.model]"
                :placeholder="item.placeholder"
                clearable
                @clear="selectClear(item)"
              />
            </el-form-item>
            <el-form-item
              v-else
              :prop="item.model"
              :class="[item.attrs && item.attrs.type === 'daterange' ? 'mg_date_picker' : '']"
              v-bind="item"
            >
              <!-- 单选 -->
              <el-radio-group
                v-if="item.type === 'radio'"
                v-model="form[item.model]"
                :placeholder="item.placeholder || '请输入'"
              >
                <el-radio
                  v-for="radioItem in item.options"
                  :key="radioItem.value"
                  :label="radioItem.value"
                >
                  {{ radioItem.label }}
                </el-radio>
              </el-radio-group>
              <!-- input 文本类型-->
              <el-input
                v-if="item.type === 'input'"
                v-model="form[item.model]"
                :placeholder="item.placeholder || '请输入'"
                clearable
                @clear="selectClear(item)"
              />
              <!-- number 类型 -->
              <el-input
                v-if="item.type === 'number'"
                v-model="form[item.model]"
                v-input-number
                maxlength="10"
                :placeholder="item.placeholder || '请输入'"
                clearable
                @clear="selectClear(item)"
              />
              <!-- 搜索类型 -->
              <el-input
                v-if="item.type === 'inputSearch'"
                v-model="form[item.model]"
                :placeholder="item.placeholder || '请输入'"
                clearable
                disabled
                @clear="selectClear(item)"
              >
                <el-button
                  slot="append"
                  :icon="form[item.model] ? 'el-icon-sort' : 'el-icon-plus'"
                  @click="item.select(item)"
                />
              </el-input>
              <!-- select 是否多选根据initialValue属性是否为数组判断；需要传进来options属性为select选择属性 -->
              <el-select
                v-if="item.type === 'select'"
                v-model="form[item.model]"
                class="width_100"
                :multiple="Array.isArray(item.initialValue || '')"
                collapse-tags
                clearable
                filterable
                :disabled="item.disabled"
                :placeholder="item.placeholder || '请选择'"
                @change="(event) => selectChange(event, item)"
                @clear="selectClear(item)"
              >
                <el-option
                  v-for="itemSub in item.options"
                  :key="itemSub.value"
                  :label="itemSub.label"
                  :value="itemSub.value"
                />
              </el-select>
              <el-date-picker
                v-if="item.type === 'date'"
                v-model="form[item.model]"
                style="width: 100%"
                :type="item.attrs.type || 'date'"
                :format="item.attrs.format || 'yyyy-MM-dd'"
                :value-format="item.attrs.valueFormat || 'timestamp'"
                :placeholder="item.placeholder || '请选择'"
                :range-separator="item.attrs.rangeSeparator || '至'"
                :picker-options="item.attrs.pickerOptions"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :popper-class="item.attrs.popperClass || ''"
                @change="(event) => dateChange(event, item)"
              />
              <div
                v-if="item.type === 'date' && item.attrs.type === 'daterange'"
                class="customize_date"
              >
                <a
                  v-for="time in dateList"
                  :key="time.value"
                  size="small"
                  @click="createDate(time, item)"
                >
                  {{ time.name }}
                </a>
              </div>
              <div v-if="item.type === 'range'">
                <el-input-number
                  v-model="form[item.model]"
                  class="input_number"
                  :placeholder="item.placeholder"
                  :controls="false"
                  @blur="rangeBlur('min', item)"
                />
                <span style="padding: 0 5px; font-size: 12px">{{ item.separator }}</span>
                <el-input-number
                  v-model="form[item.maxModel]"
                  class="input_number"
                  :placeholder="item.maxPlaceholder"
                  :controls="false"
                  @blur="rangeBlur('max', item)"
                />
              </div>
              <div
                v-if="item.type === 'monthrange'"
                class="monthrange"
              >
                <el-date-picker
                  v-model="form[item.model]"
                  :type="item.pickerType || 'month'"
                  class="month_range"
                  :format="item.format || 'yyyyMM'"
                  :value-format="item.valueFormat || 'timestamp'"
                  :placeholder="item.placeholder || '请选择'"
                  :picker-options="item.minPickerOptions"
                  @change="(event) => dateChange(event, item, 'min')"
                />
                <span style="padding: 0 5px; font-size: 12px">{{ item.separator || '-' }}</span>
                <el-date-picker
                  v-model="form[item.maxModel]"
                  :type="item.pickerType || 'month'"
                  class="month_range"
                  :format="item.format || 'yyyyMM'"
                  :value-format="item.valueFormat || 'timestamp'"
                  :placeholder="item.maxPlaceholder || '请选择'"
                  :picker-options="item.maxPickerOptions"
                  @change="(event) => dateChange(event, item, 'max')"
                />
              </div>
            </el-form-item>
          </el-col>
        </template>

        <el-col
          class="button_box"
          :span="6"
        >
          <el-form-item
            label-width="0"
            class="button_position"
          >
            <el-button
              size="small"
              type="primary"
              icon="el-icon-search"
              @click="handleSearch"
            >
              查询
            </el-button>
            <el-button
              size="small"
              icon="el-icon-refresh"
              @click="handleReset"
            >
              重置
            </el-button>
            <el-button
              v-show="spanLength >= 24 * row"
              type="text"
              @click="openForm"
            >
              <span v-if="expandType">收起筛选</span>
              <span v-else>更多筛选</span>
              <i
                v-if="expandType"
                class="el-icon-arrow-up"
              />
              <i
                v-else
                class="el-icon-arrow-down"
              />
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template v-if="isShowFooterTag">
      <form-tag
        :expand-type="expandType"
        :hide-form-list="hideFormList"
        @handleReset="handleReset"
        @closeTag="closeTag"
      />
    </template>
  </el-card>
</template>

<script>
import mixins from './mixins'
import dayjs from 'dayjs'
import FormTag from './components/FormTag'

export default {
  name: 'DyySearchForm',
  components: {
    FormTag,
  },
  mixins: [mixins],
  props: {
    formItemList: {
      // 表单基本配置数据
      type: Array,
      default: () => [],
    },
    advancedItemList: {
      // 表单基本配置数据
      type: Array,
      default: () => [],
    },
    row: {
      // 默认展示行数
      type: Number,
      default: 1,
    },
    // 是否需要底部tag
    isShowFooterTag: {
      type: Boolean,
      default: true,
    },
    isAdvanced: {
      type: Boolean,
      default: false,
    },
    // 是否为高级筛选
    searchType: {
      type: String,
      default: 'normal',
    },
    advancedRules: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      form: {},
      expandType: false,
      itemList: [],
      firstIndex: 0, // 记录第一行展示的下标
      spanLength: 0,
      hideFormList: [],
      dateList: [
        {
          name: '今',
          type: 'today',
        },
        {
          name: '昨',
          type: 'yesterday',
        },
      ],
      formItemListAssgin: [],
      searchMoreForm: {},
    }
  },
  computed: {
    // 为了改变顺序时不直接修改prop里面的值导致控制台报错
    setFormList: {
      get() {
        return this.formItemList
      },
      set(val) {
        this.$emit('update:formItemList', val)
      },
    },
  },
  watch: {
    formItemList: {
      handler(newVal) {
        this.spanLength = 0
        // 是否展开，是否展开标签
        newVal.forEach((item, index) => {
          if (!item.hidden) {
            this.spanLength += !item.span || item.type === 'date' ? 6 : item.span
          }
          if (this.spanLength < 24 * this.row) {
            this.firstIndex = index
          }
        })
        this.getHideData()
      },
      deep: true,
    },
  },
  mounted() {
    // console.log(this.$attrs)
    this.formItemListAssgin = JSON.parse(JSON.stringify(this.formItemList))
    // 根据span的总数判断第一行所展示的个数
    this.spanLength = 0
    // 获取初始化this.form数据
    const formKey = {}
    this.formItemList.forEach((item, index) => {
      this.spanLength += !item.span || item.type === 'date' ? 6 : item.span
      if (['range', 'monthrange'].includes(item.type)) {
        formKey[item.model] = item.initialValue || undefined
        formKey[item.maxModel] = item.maxInitialValue || undefined
      } else if (item.type === 'inputSearch') {
        formKey[item.model] = item.initialValue || null
        formKey[item.attrs.model] = item.attrs.initialValue || null
      } else {
        formKey[item.model] = item.initialValue || null
      }
      if (this.spanLength < 24 * this.row) {
        this.firstIndex = index
      }
    })
    this.form = formKey
    this.getHideData()
  },
  methods: {
    // input 搜索
    async querySearch(queryString, cb, item) {
      if (queryString.trim().length < 3) return
      try {
        const { data } = await item.api({ searchKey: queryString })
        cb(data)
        console.log(data)
      } catch (e) {
        console.log(6)
        cb([])
      }
    },
    // 选择
    handleSelect(value, item) {
      this.form[item.model] = value.skuCode
    },
    handleSet() {
      this.$refs.setFormItem.show()
    },
    handleAdvancedSearch() {
      this.$refs.advancedSearch.show()
    },
    syncFormItemList() {
      this.spanLength = 0
      // 获取初始化this.form数据
      const formKey = {}
      this.formItemList.forEach((item, index) => {
        this.spanLength += !item.span || item.type === 'date' ? 6 : item.span
        if (['range', 'monthrange'].includes(item.type)) {
          formKey[item.model] = item.initialValue || undefined
          formKey[item.maxModel] = item.maxInitialValue || undefined
        } else if (item.type === 'inputSearch') {
          formKey[item.model] = item.initialValue || null
          formKey[item.attrs.model] = item.attrs.initialValue || null
        } else {
          formKey[item.model] = item.initialValue || null
        }
        if (this.spanLength < 24 * this.row) {
          this.firstIndex = index
        }
      })
      this.form = formKey
      this.getHideData()
    },
    treeCheckedNodes(model) {
      return this.formItemListAssgin?.find((itemAssign) => itemAssign.model === model)?.options?.checkedNodes || []
    },
    selectClear(data) {
      const { model, label, type, options } = data
      this.form[model] = null
      const tag = {
        key: model,
        label,
        type,
        value: options,
      }
      this.closeTag(tag)
    },
    handleSearch() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.spreadData(this.form)
          if (this.isShowFooterTag) this.expandType = false
          this.getHideData()
        }
      })
    },
    // 时间快捷选择
    createDate(time, item) {
      const date = new Date()
      if (time.type === 'today') {
        this.form[item.model] = [
          dayjs(dayjs(date.getTime()).format('YYYY-MM-DD') + '00:00:00').valueOf(),
          dayjs(dayjs(date.getTime()).format('YYYY-MM-DD') + '00:00:00').valueOf(),
        ]
      } else if (time.type === 'yesterday') {
        this.form[item.model] = [
          dayjs(dayjs(date.getTime() - 3600 * 1000 * 24).format('YYYY-MM-DD') + '00:00:00').valueOf(),
          dayjs(dayjs(date.getTime() - 3600 * 1000 * 24).format('YYYY-MM-DD') + '00:00:00').valueOf(),
        ]
      } else if (time.type === 'week') {
        this.form[item.model] = [
          dayjs(dayjs(date.getTime() - 7 * 3600 * 1000 * 24).format('YYYY-MM-DD') + '00:00:00').valueOf(),
          dayjs(dayjs(date.getTime()).format('YYYY-MM-DD') + '00:00:00').valueOf(),
        ]
      } else if (time.type === 'month') {
        this.form[item.model] = [
          dayjs(dayjs(date.getTime() - 30 * 3600 * 1000 * 24).format('YYYY-MM-DD') + '00:00:00').valueOf(),
          dayjs(dayjs(date.getTime()).format('YYYY-MM-DD') + '00:00:00').valueOf(),
        ]
      }
    },
    // select 选择后触发
    selectChange(value, item) {
      if (item.change) {
        item.change(value, item)
      }
    },
    // 日期范围选择器change方法触发
    dateChange(date, item, range) {
      if (!range && item.change) {
        item.change(date, item)
      }
      if (range && item.change) {
        item.change({ date, range }, item)
      }
    },
    // 切换label
    handleCommand(data, row) {
      this.formItemList.forEach((item, index) => {
        if (item.dropdownType === row.dropdownType) {
          row.attrs.options.forEach((itemRow) => {
            if (itemRow.model === data) {
              this.$set(this.formItemList, index, {
                ...row,
                ...itemRow,
              })
            } else {
              this.form[itemRow.model] = null
            }
          })
        }
      })
      this.getHideData()
    },
    // 清除单条隐藏数据
    closeTag(tag) {
      this.hideFormList = this.hideFormList.filter((item) => item.key !== tag.key)
      if (this.searchType === 'normal') {
        this.resetForm(tag)
      } else {
        this.searchMoreForm.mainList.forEach((item, index) => {
          if (item.field === tag.key) {
            this.searchMoreForm.mainList.splice(index, 1)
          }
        })
        this.searchMoreForm.childList.forEach((item, index) => {
          if (item.field === tag.key) {
            this.searchMoreForm.mainList.splice(index, 1)
          }
        })
        console.log(this.$refs.advancedSearch.form)
        Object.keys(this.$refs.advancedSearch.form).forEach((item) => {
          if (item === tag.key) {
            if (typeof this.$refs.advancedSearch.form[item] === 'string') {
              this.$set(this.$refs.advancedSearch.form, item, null)
            } else if (this.$refs.advancedSearch.form[item] instanceof Array) {
              this.$set(this.$refs.advancedSearch.form, item, [])
            } else {
              this.$set(this.$refs.advancedSearch.form, item, null)
            }
            if (tag.type === 'inputSearch') {
              this.$set(this.$refs.advancedSearch.form, item, null)
              this.$set(this.$refs.advancedSearch.form, tag.attrsModel, null)
            }
            if (tag.type === 'selectTree') {
              this.$set(this.$refs.advancedSearch.form, item, null)
              this.$refs['treeOption'][0].$refs['tree'].setCheckedNodes([])
            }
          }
        })
        this.$emit('handleSearchMore', { ...this.searchMoreForm, page: 1 })
      }
    },
    // 单条清除数据后重置form数据
    resetForm(tag) {
      Object.keys(this.form).forEach((item) => {
        if (item === tag.key) {
          if (typeof this.form[item] === 'string') {
            this.$set(this.form, item, null)
          } else if (this.form[item] instanceof Array) {
            this.$set(this.form, item, [])
          } else {
            this.$set(this.form, item, null)
          }
          if (tag.type === 'inputSearch') {
            this.$set(this.form, item, null)
            this.$set(this.form, tag.attrsModel, null)
          }
          if (tag.type === 'selectTree') {
            this.$set(this.form, item, null)
            this.$refs['treeOption'][0].$refs['tree'].setCheckedNodes([])
          }
        }
      })
      this.spreadData(this.form)
    },
    // 更多筛选点击事件,根据记录的下标去截取和拼接itemList
    openForm() {
      this.expandType = !this.expandType
      // this.getHideData()
    },
    // 重置表单数据
    handleReset() {
      if (this.searchType === 'normal') {
        const formKey = {}
        // 需特别处理的字段
        const specialType = ['range', 'inputSearch', 'selectTree']
        this.formItemList.forEach((item) => {
          if (specialType.includes(item.type)) {
            const typeObj = {
              range: () => {
                formKey[item.model] = item.initialValue || undefined
                formKey[item.maxModel] = item.maxInitialValue || undefined
              },
              monthrange: () => {
                formKey[item.model] = item.initialValue || undefined
                formKey[item.maxModel] = item.maxInitialValue || undefined
              },
              inputSearch: () => {
                formKey[item.model] = item.initialValue || null
                formKey[item.attrs.model] = item.attrs.initialValue || null
              },
              selectTree: () => {
                formKey[item.model] = item.initialValue || null
                this.$refs['treeOption'][0].$refs['tree'].setCheckedNodes([])
              },
            }
            typeObj[item.type]()
          } else {
            formKey[item.model] = item.initialValue || null
          }
        })
        this.hideFormList = []
        this.form = formKey
        // 重置选项值
        for (let item in this.form) {
          if (typeof this.form[item] === 'string') {
            this.$set(this.form, item, null)
          } else if (this.form[item] instanceof Array) {
            this.$set(this.form, item, [])
          } else {
            this.$set(this.form, item, null)
          }
        }
        this.form = {
          ...this.form,
          btnType: 'reset'
        }
        this.spreadData(this.form)
      } else {
        this.hideFormList = []
        this.$emit('getSearchFormData', { mainList: [], childList: [], page: 1, size: 20 })
      }
    },
    rangeBlur(type, item) {
      if (type === 'min') {
        if (this.form[item.maxModel] && this.form[item.model] > this.form[item.maxModel]) {
          this.$message.warning(`${item.label} 最小值不能大于最大值`)
        }
      } else {
        if (this.form[item.model] && this.form[item.model] > this.form[item.maxModel]) {
          this.$message.warning(`${item.label} 最大值不能小于最小值`)
        }
      }
    },
    // 向父组件传递处理好的数据
    spreadData(data) {
      const dataObj = JSON.parse(JSON.stringify(data))
      this.formItemList.forEach((item) => {
        Object.keys(dataObj).forEach((key) => {
          if (item.turnKey && item.model === key) {
            if (item.type === 'date' && item.attrs.valueFormat === 'timestamp') {
              dataObj[item.attrs.begin] = (dataObj[key] && dataObj[key][0]) || null
              dataObj[item.attrs.end] = dataObj[key] && dataObj[key][1] ? dataObj[key][1] + 86399000 : null
            } else if (item.type === 'date' && item.attrs.valueFormat === 'yyyy-MM-dd') {
              dataObj[item.attrs.begin] = (dataObj[key] && dataObj[key][0]) || null
              dataObj[item.attrs.end] = dataObj[key] && dataObj[key][1] ? dataObj[key][1] + '23:59:59' : null
            } else if (item.type === 'date' && item.attrs.valueFormat === 'yyyy-MM-dd HH:mm:ss') {
              dataObj[item.attrs.begin] = (dataObj[key] && dataObj[key][0]) || null
              dataObj[item.attrs.end] = (dataObj[key] && dataObj[key][1]) || null
            }
            delete dataObj[key]
          } else if (item.turnKey && item.model === key && dataObj[key].length === 0) {
            delete dataObj[key]
          } else if (item.turnLabel && item.model === key) {
            item.attrs.options.forEach((drop) => {
              if (drop.model !== item.model) {
                dataObj[drop.model] = null
                // delete dataObj[drop.model]
              }
            })
          }
        })
      })
      this.$emit('getSearchFormData', dataObj)
    },
    // 树形选项
    filterTreeNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    // 树形选项change监听
    checkChangeTree(checkedNodesParam, checkedKeysParam, halfCheckedNodes, halfCheckedKeys, itemRow) {
      if (!checkedKeysParam?.checkedKeys) {
        this.form[itemRow.model] = null
        this.$refs['treeOption'][0].$refs['tree'].setCheckedNodes([])
        return false
      }
      const { checkedNodes } = checkedKeysParam
      this.handleCombinationVal(checkedNodes, itemRow).then((res) => {
        this.formItemListAssgin.forEach((item) => {
          if (item.model === itemRow.model) {
            item.options.checkedNodes = res
          }
        })
      })
      this.$set(this.form, itemRow.model, checkedKeysParam.checkedKeys)
    },
    // 递归数据 组合code-name
    handleCombinationVal(data, itemRow) {
      return new Promise((resolve, reject) => {
        const combinationObj = []
        if (data?.length > 0) {
          data.map((item) => {
            if (!item.children || item.categoryLevel === 'LEVEL1') {
              // const combinationItem = `${item[itemRow.options.nodeKey]}-${item.name}`
              const combinationItem = `${item.name}`
              combinationObj.push(combinationItem)
            }
            if (item?.children?.length > 0) this.handleCombinationVal(item.children, itemRow)
          })
          resolve(combinationObj)
        }
      })
    },
    // 树形select选项RemoveTag
    handleRemoveTag(event, item) {
      if (item.type === 'selectTree') {
        this.form[item.model] = null
        this.$refs['treeOption'][0].$refs['tree'].setCheckedNodes([])
      }
    },
  },
}
</script>

<style scoped lang="scss">
.mg-searc-form {
  overflow: unset !important;
}
.mg_date_picker {
  ::v-deep {
    .el-range-editor.el-input__inner {
      padding: 3px 30px 3px 10px;
    }
    .el-form-item__content {
      position: relative;
    }
  }
}
.customize_date {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 100;
  display: inline-block;
  width: 28px;
  height: 26px;
  overflow: hidden;
  line-height: 28px;
  background: #ffffff;
  border: 1px #1a252a3d solid;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  &:hover {
    width: 59px;
  }

  a {
    display: inline-block;
    width: 28px;
    height: 26px;
    color: #000000;
    text-align: center;
    &:nth-child(1) {
      float: right;
    }
    &:nth-child(2) {
      border-right: 1px #1a252a3d solid;
    }
    &:link {
      color: rgba(230, 0, 18, 1);
    }
    &:visited {
      color: rgba(230, 0, 18, 1);
    }
    &:hover {
      color: rgba(230, 0, 18, 1) !important;
    }
    &:active {
      color: rgba(230, 0, 18, 1);
    }
  }
}
.formSelectTreeOption {
  height: 100%;
  background: #fff;
  padding: 10px 0 !important;
}
::v-deep {
  .advanced_button {
    border: none;
  }
  .el-tag.el-tag--info {
    color: rgba(#252a3d, 0.75);
    background-color: #ffffff;
  }
  .el-card__body {
    padding: 18px 12px 0px;
  }
  .input_number {
    width: 78px;
    .el-input--mini {
      width: 81px;
    }
  }
  .monthrange {
    display: flex;
    flex-wrap: nowrap;
  }
  .month_range {
    width: 113px;
    .el-input--mini {
      width: 81px;
    }
  }
  .el-row {
    display: flex;
    flex-wrap: wrap;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    padding: 0 15px;
    text-align: center;
    i {
      transform: rotate(90deg);
    }
  }
  .el-button--small {
    min-width: auto;
  }
  .el-input-group__append,
  .el-input-group__prepend {
    font-size: 14px;
    font-weight: bold;
    color: #ea2838;
    background-color: #ffffff;
  }
}

.button_box {
  flex: 1;
  text-align: right;
  .button_position {
    display: flex;
    justify-content: flex-end;
    margin-left: 32px;
    ::v-deep {
      .el-button + .el-button {
        margin-left: 8px;
      }
    }
  }
}
.ul-more {
  padding: 0px;
  margin: 0;
  .el-dropdown-menu__item {
    font-size: 12px;
    color: rgba(37, 42, 61, 1);
  }
}
.width_150 {
  width: 250px;
}

.tag_box {
  display: flex;
  align-items: center;
  float: left;
  margin-left: 10px;
  margin-bottom: 4px;
  .selectTreeCon {
    max-width: 200px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.float_left {
  float: left;
}
.width_100 {
  width: 100% !important;
}

.mg-select-tree {
  width: 200px;
  display: inline-block;
  transition: 0.5s;
  padding: 20px;
  .select-param-input {
    width: 100%;
    cursor: pointer;
  }
  .mg-drop-down {
    border-radius: 3px;
    max-height: 200px;
    min-width: 200px;
    padding: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.2);
  }
  .mg-drop-down .drop-down-tree {
    overflow: auto;
  }
  .triangle {
    width: 0;
    height: 0;
    border-width: 0 8px 7px;
    border-style: solid;
    border-color: transparent transparent rgb(220, 223, 230);
    margin-left: 60px;
    margin-top: 3px;
    position: relative;
  }
  .triangle span {
    display: block;
    width: 0;
    height: 0;
    border-width: 0 7px 6px;
    border-style: solid;
    border-color: transparent transparent rgb(255, 255, 255);
    position: absolute;
    top: 1px;
    left: -7px;
  }
}
</style>
