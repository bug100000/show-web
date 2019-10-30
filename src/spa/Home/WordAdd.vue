<template>
  <div id="WordAdd">
    <div class="from-item">
      标题：
      <Input class="input" v-model="title" placeholder="Enter something..." style="width: 300px"/>
    </div>
    <div class="from-item">
      内容：
      <Input
        class="input"
        v-model="content"
        type="textarea"
        :rows="25"
        placeholder="Enter something..."
      />
    </div>
    <div class="from-item">
      <span class="submit-laber">提交：</span>
      <Button type="default" long @click="submit">提交</Button>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
export default {
  name: "WordAdd",
  data() {
    return {
      data: "",
      title: "",
      content: "",
      spinShow: false
    };
  },
  mounted: function() {},
  methods: {
    submit() {
      let _this = this;
      if (!this.title) {
          _this.$Message.error("标题不能为空");
      }
      if (!this.content) {
          _this.$Message.error("内容不能为空");
      }
      let data = {
        title: this.title,
        content: this.content
      };
      this.spinShow = true;
      this.$axios
        .post(`/api/word/add`, data)
        .then(function(res) {
          if (res.code == 200) {
            _this.$Message.success(res.msg);
            setTimeout(function() {
              _this.routerPush("/Home/Word");
            }, 2000);
          } else {
            _this.$Message.error(res.msg);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    routerPush(hash) {
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
#WordAdd {
  width: 1000px;
  margin: auto;
  position: relative;
  .from-item {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    .input {
      white-space: pre-line;
      width: auto;
      flex: 1 1 auto;
    }
    .submit-laber {
      visibility: hidden;
    }
  }
}
// 自定义样式buttom
</style>