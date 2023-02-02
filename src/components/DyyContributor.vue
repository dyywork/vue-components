/** *@name:DyyContributor *@author:dingyongya *@date:2023/2/2 15:35
*@update:2023/2/2 15:35 */
<template>
  <div class="contribute_box">
    <template v-for="item in list">
      <div :key="item.login" class="item_box">
        <img :src="item.avatar_url" />
        <a :href="item.html_url" target="_blank">{{ item.login }}</a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "DyyContributor",
  props: {
    contributeList: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      list: [],
      imgList: [],
    };
  },
  watch: {
    imgList(newValue) {
      newValue.forEach((item) => {
        this.list.forEach((temp) => {
          if (item.name === temp.committer_email) {
            temp.avatar_url = item.avatar_url;
          }
        });
      });
    },
  },
  mounted() {
    this.getApi();
  },
  methods: {
    getApi() {
      fetch(
        `https://api.github.com/repos/dyy-ui/dyy-ui/commits?path=/package/docs/dyyTable.md`,
        {
          method: "get",
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let obj = {};
          this.list = data
            .map((item) => item.committer)
            .reduce((pre, cur) => {
              obj[cur["login"]]
                ? ""
                : (obj[cur["login"]] = true && pre.push(cur));
              return pre;
            }, []);
          console.log(this.list);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.contribute_box {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  .item_box {
    display: flex;
    align-items: center;
  }
  img {
    width: 30px;
  }
  a {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    text-decoration-line: none;
    margin: 0 5px;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
