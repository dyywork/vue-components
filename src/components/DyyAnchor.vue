<template>
  <ul class="dyy-anchor">
    <li
      v-for="item in anchor"
      :key="item"
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
      default: '12'
    }
  },
  data() {
    return {
      anchor: []
    }
  },
  mounted() {
    this.anchor = this.anchorList.split(',')
  },
  methods: {
    handleTitle(title){
      console.log(document.querySelector(".main-container").scrollTop)
      console.log()
      document.querySelector(".main-container").scrollTop = document.querySelector("#"+ title).offsetTop
      console.log(title);
    }
  }
}
</script>

<style scoped lang="less">
.dyy-anchor{
  position: fixed;
  width: 150px;
  right: 10px;
  li{
    cursor: pointer;
    background-color: #f6f6f6;
    font-size: 12px;
    margin-bottom: 5px;
    border-radius: 3px;
    padding: 2px 5px;
    a{
      color: #000;
      text-underline: none;
    }
  }
}
</style>
