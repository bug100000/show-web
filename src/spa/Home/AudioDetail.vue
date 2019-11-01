<template>
  <div id="AudioDetail">
    <div class="audio-box">
      <h3 class="audio-item">{{data.title ? data.title : '视频标题'}}</h3>
      <audio class="audio-item" :src="/http/.test(data.url) ? data.url : domain + data.url" controls="controls"></audio>
    </div>
  </div>
</template>

<script>
import config from "../../utils/config.js"
export default {
  name: "AudioDetail",
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
        .post(`/api/audio/getDetail`, data)
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
#AudioDetail {
  .audio-box {
    width: 600px;
    margin: auto;
  }
  .audio-item {
    width: 100%;
    display: block;
    margin: auto;
    margin-top: 20px;
  }
}
// 自定义样式buttom
</style>