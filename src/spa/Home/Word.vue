<template>
  <div id="Word">
    <div class="word-list">
      <div v-for="(item, index) in list" :key="index" class="word-item">
        <h3 class="word-title" @click="routerPush('/Home/wordDetail', {id: item.id})">{{item.title}}</h3>
        <p class="word-content">{{item.content}}</p>
      </div>
    </div>
    <div class="footer">.</div>
  </div>
</template>

<script>
export default {
  name: "Word",
  data() {
    return {
      list: []
    };
  },
  mounted: function() {
    this.getWordList();
  },
  methods: {
    routerPush(path, query) {
      this.$router.push({
        path,
        query
      });
    },
    getWordList() {
      let _this = this;
      this.$axios
        .get("/api/word/getList")
        .then(function(res) {
          _this.list = res.data;
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
#Word {
  .word-item {
    width: 1000px;
    display: block;
    margin: auto;
    margin-top: 20px;
  }
  .word-title{
    display: inline-block;
    margin-bottom: 20px;
    // border-bottom: 1px solid gray;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .word-content {
    white-space: pre-line;
    max-height: 100px;
    //超出省略
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin-bottom: 50px;
  }
  .footer{
    margin: auto;
    text-align: center;
    visibility: hidden;
  }
}
// 自定义样式buttom
</style>