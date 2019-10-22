<template>
  <div id="Index">
    <div class="box">
      <span ref="col1" class="list list-1">
        <img v-for="(item,index) in list1" :key="index" class="item" :src="item">
      </span>
      <span ref="col2" class="list list-2">
        <img v-for="(item,index) in list2" :key="index" class="item" :src="item">
      </span>
      <span ref="col3" class="list list-3">
        <img v-for="(item,index) in list3" :key="index" class="item" :src="item">
      </span>
      <span ref="col4" class="list list-4">
        <img v-for="(item,index) in list4" :key="index" class="item" :src="item">
      </span>
    </div>
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
    this.getPicList();
  },
  methods: {
    init() {},
    Jump(hash) {
      this.$router.push(hash);
    },
    getPicList() {
      let list = [];
      for (let i = 1; i < 23; i++) {
        list.push(`http://47.104.165.184/images/picture (${i}).jpg`);
      }
      this.round = list;
      this.list = this.list.concat(list);
      this.appendPic(0);
    },
    appendPic(index) {
      let _this = this;
      let listName = this.selectCol();
      var index = index || 0;
      if (this.round.length > index) {
        this[listName].push(this.round[index]);
        this.$nextTick(() => {
          _this.appendPic(index + 1);
        });
      }
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
  .box {
    width: 1179px;
    margin: auto;
    vertical-align: top;
  }
  .list {
    display: inline-block;
    width: 24%;
    vertical-align: top;
  }
  .item {
    display: inline-block;
    width: 100%;
    background-color: rgba(8, 7, 7, 0.1);
    color: white;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 30px;
  }
}
// 自定义样式buttom
</style>