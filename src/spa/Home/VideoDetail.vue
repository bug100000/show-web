<template>
  <div id="VideoDetail">
    <div class="video-box">
      <h3 class="video-item">{{data.title ? data.title : '视频标题'}}</h3>
      <video class="video-item" :src="/http/.test(data.url) ? data.url : domain + data.url" controls="controls"></video>
    </div>
  </div>
</template>

<script>
import config from "../../utils/config.js"
export default {
  name: "VideoDetail",
  data() {
    return {
      data: {},
      domain: config.domain
    };
  },
  mounted: function() {
    this.getDetail();
  },
  methods: {
    Jump(hash) {
      this.$router.push(hash);
    },
    getDetail() {
      let _this = this;
      let data = {
        id: this.$route.query.id
      }
      this.$axios
        .post(`/api/video/getDetail`, data)
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
#VideoDetail {
  .video-box {
    width: 1000px;
    margin: auto;
  }
  .video-item {
    width: 100%;
    display: block;
    margin: auto;
    margin-top: 20px;
  }
}
// 自定义样式buttom
</style>