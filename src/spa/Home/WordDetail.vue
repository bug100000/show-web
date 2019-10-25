<template>
  <div id="WordDetail">
    <h2 class="title">{{data.title}}</h2>
    <p class="content">{{data.content}}</p>
  </div>
</template>

<script>
export default {
  name: "WordDetail",
  data() {
    return {
      data: ""
    };
  },
  mounted: function() {
    this.getDetail();
  },
  methods: {
    routerPush(hash) {
      this.$router.push(hash);
    },
    getDetail() {
      let _this = this;
      this.$axios
        .get(`/api/word/getDetail?id=${this.$route.query.id}`)
        .then(function(res) {
          _this.data = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}

// 自定义样式top
#WordDetail {
  width: 1000px;
  margin: auto;
  .title{
      margin-bottom: 30px;
  }
  .content {
    white-space: pre-line;
    padding-bottom: 20px;
  }
}
// 自定义样式buttom
</style>