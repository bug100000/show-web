<template>
  <div id="PictureUpload">
    <div class="from-item">
      <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        name="file"
        multiple
        type="drag"
        :action="domain+`/api/base/upload`"
        style="display: inline-block;width: 58px;"
      >
        <div style="padding: 20px 0;">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>Click or drag files here to upload</p>
        </div>
      </Upload>
    </div>
    <div class="from-item">
      <!-- 已上传图片列表 -->
      <div class="demo-upload-list" v-for="(item, index) in uploadList" :key="index">
        <template v-if="item.status === 'finished'">
          <img :src="domain + item.url">
          <div class="demo-upload-list-cover">
            <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
          </div>
        </template>
        <template v-else>
          <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
      </div>
      <!-- 弹窗显示放大图片 -->
      <Modal title="View Image" v-model="visible">
        <img
          :src="domain + imgUrl"
          v-if="visible"
          style="width: 100%"
        >
      </Modal>
    </div>
    <div class="from-item">
      <!-- <span class="submit-laber">提交：</span> -->
      <Button type="default" long @click="submit">提交</Button>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
import config from "../../utils/config.js"
export default {
  name: "PictureUpload",
  data() {
    return {
      defaultList: [],
      imgUrl: "",
      visible: false,
      uploadList: [],
      domain: config.domain,
      spinShow: false
    };
  },
  mounted: function() {
    this.uploadList = this.$refs.upload.fileList;
  },
  methods: {
    // 图片上传成功
    handleSuccess(res, file) {
      if (res.code == 200) {
        file.url = res.data;
        let name = res.data.split("/");
        file.name = name[name.length - 1];
      } else {
        this.$Notice.warning({
          title: res.msg
        });
      }
    },
    // 提交已上传图片的地址
    submit() {
      let _this = this;
      if (this.uploadList.length == 0) {
        _this.$Message.error("至少提交一张图片");
        return false;
      }
      let pictures = [];
      for (let i = 0; i < this.uploadList.length; i++) {
        pictures.push({
          url: this.uploadList[i].url,
          size: this.uploadList[i].size,
          name: this.uploadList[i].name
        })
      }
      this.spinShow = true;
      this.$axios
        .post(`/api/picture/add`, { pictures })
        .then(function(res) {
          if (res.code == 200) {
            _this.$Message.success(res.msg);
            setTimeout(function() {
              _this.routerPush("/Home/Index");
            }, 2000);
          } else {
            _this.$Message.error(res.msg);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 放大查看已上传图片
    handleView(url) {
      this.imgUrl = url;
      this.visible = true;
    },
    // 移除已上传图片
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      console.log(file);
      console.log(fileList);
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    routerPush(hash) {
      this.$router.push(hash);
    },
    // 图片格式校验
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    // 图片大小校验
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    // 一次上传图片数量校验
    handleBeforeUpload() {
      // const check = this.uploadList.length < 10;
      // if (!check) {
      //   this.$Notice.warning({
      //     title: "一次只能选择一张图片"
      //   });
      // }
      // return check;
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
#PictureUpload {
  width: 1000px;
  margin: auto;
  position: relative;
  .from-item {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    flex-wrap: wrap;
    .ivu-upload {
      width: 100% !important;
    }
    .input {
      white-space: pre-line;
      width: auto;
      flex: 1 1 auto;
    }
    .submit-laber {
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