<template>
  <div id="Video">
    <div class="video-list">
      <div v-for="(item, index) in list" :key="index" class="video-item">
        <h3
          class="video-title"
          @click="routerPush('/Home/videoDetail', {id: item.id})"
        >{{item.title}}</h3>
        <br>
        <video class="item" :src="/http/.test(item.url) ? item.url : domain + item.url" controls="controls"></video>
      </div>
    </div>
    <div class="footer">.</div>
  </div>
</template>

<script>
import config from "../../utils/config.js"
export default {
  name: "Video",
  data() {
    return {
      list: [],
      domain: config.domain
    };
  },
  mounted: function() {
    this.getVideoList();
  },
  methods: {
    routerPush(path, query) {
      this.$router.push({
        path,
        query
      });
    },
    getVideoList() {
      let _this = this;
      this.$axios
        .get("/api/video/getList")
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
#Video {
  .video-item {
    width: 800px;
    display: block;
    margin: auto;
    margin-top: 20px;
    .item{
      width: 300px;
    }
  }
  .video-title {
    display: inline-block;
    margin-bottom: 20px;
    // border-bottom: 1px solid gray;
    text-decoration-line: underline;
    cursor: pointer;
  }
  .video-content {
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
  .footer {
    margin: auto;
    text-align: center;
    visibility: hidden;
  }
}
// 自定义样式buttom
</style>