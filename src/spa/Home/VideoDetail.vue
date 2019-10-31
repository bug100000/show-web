<template>
  <div id="VideoDetail">
    <div class="video-box">
      <h3 class="video-item">视频标题</h3>
      <video class="video-item" src="http://47.104.165.184/videos/scenery.mp4" controls="controls"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  data() {
    return {
      list: [],
      round: [],
      list1: [],
      list2: [],
      list3: [],
      list4: []
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init() {},
    Jump(hash) {
      this.$router.push(hash);
    },
    getDetail() {
      let _this = this;
      this.$axios
        .get(`/api/video/getDetail?id=${this.$route.query.id}`)
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