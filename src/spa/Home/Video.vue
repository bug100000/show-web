<template>
  <div id="Video">
      <video class="video-item" src="http://47.104.165.184/videos/scenery.mp4" controls="controls"></video>
  </div>
</template>

<script>
export default {
  name: "Video",
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
    .video-item{
        width: 1000px;
        display: block;
        margin: auto;
        margin-top: 20px;
    }
}
// 自定义样式buttom
</style>