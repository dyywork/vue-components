/** *@name:DyyUpdate *@author:dingyongya *@date:2023/1/18 14:34
*@update:2023/1/18 14:34 */
<template>
  <div class="update_content">
    <el-timeline>
      <el-timeline-item
        v-for="item in list"
        :key="item.time"
        :timestamp="item.time"
        placement="top"
      >
        <div class="version_box">{{ item.version }}</div>
        <div class="update_box" v-html="item.content"></div>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "DyyUpdate",
  props: {
    timelineList: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = JSON.parse(this.timelineList);
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .el-timeline .el-timeline-item:last-child .el-timeline-item__tail {
    display: block;
  }
  .update_content:last-child
    .el-timeline
    .el-timeline-item
    .el-timeline-item__tail {
    display: none !important;
  }
  ul,
  li {
    margin-bottom: 0 !important;
  }
}
.version_box {
  position: absolute;
  top: 2px;
  z-index: 10;
  right: 0px;
}
::v-deep {
  .update_box {
    h2 {
      margin: 10px 0;
    }
    p {
      margin: 20px 0;
    }
    a {
      text-decoration-line: none;
    }
  }
}
</style>
