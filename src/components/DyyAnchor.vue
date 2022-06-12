<template>
  <ul class="dyy-anchor">
    <li
      v-for="item in anchor"
      :key="item"
      :class="active===item ? 'anchor-active': ''"
      @click="handleTitle(item)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DyyAnchor',
  props: {
    anchorList: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      anchor: [],
      active: '',
      locationTop: {}
    }
  },
  created() {
    this.anchor = this.anchorList.split(',')
    this.active = this.anchor[0]
  },
  mounted() {
    this.monitorScroll()
  },
  methods: {
    // 点击锚点
    handleTitle(title){
      document.querySelector("#"+ title)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    // 监听滚动条滚动
    monitorScroll() {
      document.querySelector('.main-container').addEventListener('scroll',  (e)=>{
        this.debounce(this.getOffsetTop(), 1000)
        Object.keys(this.locationTop).forEach(key => {
          if (e.target.scrollTop >= this.locationTop[key]) {
            this.active = key;
          }
        })
      })
    },
    // 获取锚点位置
    getOffsetTop() {
      this.locationTop = {};
      this.anchor.forEach(item => {
        const offsetTop = document.querySelector('#'+ item)?.offsetTop;
        this.locationTop[item] = offsetTop;
      })
    },
    // 防抖
    debounce(fn,delay){
      let timer = null //借助闭包
      return () => {
        if(timer){
          clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
          timer = setTimeout(fn,delay)
        }else{
          timer = setTimeout(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.dyy-anchor{
  position: fixed;
  width: 140px;
  right: 15px;
  height: 100vh;
  padding-left: 10px;
  border-left: 1px #EBEEF5 solid;
  .anchor-active{
    background-color: #f6f6f6;
    color: #409eff;
  }
  li{
    cursor: pointer;
    font-size: 12px;
    margin-bottom: 5px;
    border-radius: 3px;
    padding: 5px 10px;
    a{
      color: #000;
      text-underline: none;
    }
  }
}
</style>
