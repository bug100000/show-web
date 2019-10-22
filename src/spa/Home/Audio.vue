<template>
  <div id="Index">
    <audio class="audio-item" src="http://47.104.165.184/audio/01.mp3" controls="controls"></audio>
  </div>
</template>

<script>
export default {
  name: "Index",
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
    // 获取高度最小的列
    selectCol() {
      let getHeight = ref => {
        return this.$refs[ref].offsetHeight;
      };
      let height1 = getHeight("col1");
      let height2 = getHeight("col2");
      let height3 = getHeight("col3");
      let height4 = getHeight("col4");
      console.log(height1, height2, height3, height4);
      switch (Math.min(height1, height2, height3, height4)) {
        case height1:
          return "list1";
        case height2:
          return "list2";
        case height3:
          return "list3";
        case height4:
          return "list4";
      }
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
#Index {
  .audio-item {
    width: 500px;
    display: block;
    margin: auto;
    margin-top: 20px;
  }
}
// 自定义样式buttom
</style>