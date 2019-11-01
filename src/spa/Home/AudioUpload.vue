<template>
  <div id="AudioUpload">
    <div class="from-item">
      <span class="laber">标题：</span>
      <Input class="input" v-model="title" placeholder="Enter something..." style="width: 300px"/>
    </div>
    <div class="from-item">
      <span class="laber">音频：</span>
      <Upload
        ref="upload"
        multiple
        type="drag"
        :format="['MPEG','MP3','MPEG-4','MIDI','WMA']"
        :max-size="2048000"
        :on-format-error="handleFormatError"
        :action="domain+`/api/base/upload`"
        :on-success="handleSuccess"
        :before-upload="handleBeforeUpload"
      >
        <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>Click or drag files here to upload</p>
        </div>
      </Upload>
    </div>
    <div class="from-item">
      <span class="hidden-laber laber">提交：</span>
      <Button type="default" long @click="submit">提交</Button>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
import config from "../../utils/config.js";
export default {
  name: "AudioUpload",
  data() {
    return {
      domain: config.domain,
      spinShow: false,
      uploadList: [],
      title: ""
    };
  },
  mounted: function() {
    this.uploadList = this.$refs.upload.fileList;
  },
  methods: {
    // 图片上传成功
    handleSuccess(res, file) {
      if (res.code == 200) {
      } else {
        this.$Notice.warning({
          title: res.msg
        });
      }
    },
    // 提交已上传图片的地址
    submit() {
      let _this = this;
      if (!this.title) {
        _this.$Message.error("请填写标题");
        return false;
      }
      if (this.uploadList.length == 0) {
        _this.$Message.error("请选择视频");
        return false;
      }
      let title = this.uploadList[0].response.data.split("/");
      title = title[title.length - 1];
      let data = {
        url: this.uploadList[0].response.data,
        size: this.uploadList[0].size,
        title: this.title
      };
      this.spinShow = true;
      this.$axios
        .post(`/api/audio/add`, data)
        .then(function(res) {
          if (res.code == 200) {
            _this.$Message.success(res.msg);
            setTimeout(function() {
              _this.routerPush("/Home/Audio");
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
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " + file.name + " is incorrect, please select audio."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2G."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 1;
      if (!check) {
        this.$Notice.warning({
          title: "Up to one audio can be uploaded."
        });
      }
      return check;
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
#AudioUpload {
  width: 1000px;
  margin: auto;
  position: relative;
  .from-item {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    // flex-wrap: wrap;
    .ivu-upload {
      width: 100% !important;
    }
    .input {
      white-space: pre-line;
      width: auto;
      flex: 1 1 auto;
    }
    .laber{
      width: 50px;
    }
    .hidden-laber {
      visibility: hidden;
    }
  }
  .demo-upload-list {
    display: inline-block;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    margin-right: 4px;
  }
  .demo-upload-list img {
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }
  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 40px 6px;
  }
}
// 自定义样式buttom
</style>