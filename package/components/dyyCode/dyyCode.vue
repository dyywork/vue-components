/**
*@name:dyyCode
*@author:dingyongya
*@date:2022/5/18 15:46
*@update:2022/5/18 15:46
*/

<template>
  <div class="dyy_code">
    <height-transition>
      <div
        v-show="codeContent"
      >
        <div
          class="dyy_copy_button"
          @click="copyCode"
        >
          <div
            v-pre
            class="codeHtml"
            style="display: none"
          >
            <slot name="code" />
          </div>
          复制
        </div>
        <div class="language-html line-numbers">
          <slot />
        </div>
      </div>
    </height-transition>
    <div
      :class="['dyy_code_footer',codeContent? 'dyy_code_border dyy_code_footer_fixed' : '']"
      @click="handleExpand"
    >
      <i :class="codeContent? 'el-icon-caret-top': 'el-icon-caret-bottom'" />
    </div>
  </div>
</template>

<script>
import heightTransition from './utils'
import unescapeHtml from 'unescape-html'
export default {
  name: "DyyCode",
  components: {heightTransition},
  props: {
    htmlTest: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      codeContent: false,
      codeHtml: ''
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    handleExpand() {
     this.codeContent = !this.codeContent
    },
    copyCode(e) {
      this.codeHtml = unescapeHtml(e.target.children[0].children[0].children[0].innerHTML)
      // 复制 不支持http
        navigator && navigator.clipboard && navigator.clipboard.writeText(this.codeHtml).then(res => {
          this.$message.success('复制成功')
        }).catch(err=> {
          console.log(err);
        })
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep{
  pre[class*="language-"]{
    margin: 0;
  }
  :not(pre) > code[class*="language-"], pre[class*="language-"]{
    background-color: #fdfdfd;
  }
}
.dyy_code{
  position: relative;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px #EBEEF5 solid;
  .dyy_copy_button{
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
    font-size: 12px;
    color: #409EFF;
    border:1px #c6e2ff solid;
    background-color: #ecf5ff;
    border-radius: 3px;
    padding: 3px 5px;
    cursor: pointer;
  }
  .dyy_code_border{
    border-top: 1px #EBEEF5 solid;
  }
  .dyy_code_footer_fixed{
    position: sticky;
    bottom: -20px;
  }
  .dyy_code_footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 2px);
    height: 40px;
    background-color: #ffffff;
    cursor: pointer;

    i{
      color: #409EFF;
      border:1px #c6e2ff solid;
      background-color: #ecf5ff;
      border-radius: 10px;
    }
    &:hover{
      i{
        color: #409EFF;
        border: 1px solid #409EFF;
      }
    }
  }
}
</style>