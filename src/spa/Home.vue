<template>
  <div id="Home">
    <div class="home-box" :class="theme1">
      <span class="logo">
        <!-- <img class="logo-img" src="../assets/img/logo_show.png"> -->
        <!-- SHOW -->
      </span>
      <div class="placeholder"></div>
      <Menu class="menu-box" mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1" to="/Home/Index">
          <Icon type="md-images"/>图片
        </MenuItem>
        <MenuItem name="2" to="/Home/Word">
          <Icon type="logo-wordpress"/>文字
        </MenuItem>
        <MenuItem name="3" to="/Home/Video">
          <Icon type="md-videocam"/>视频
        </MenuItem>
        <MenuItem name="4" to="/Home/Audio">
          <Icon type="md-volume-up"/>音频
        </MenuItem>
        <Submenu name="5">
          <template slot="title">
            <Icon type="md-settings"/>综合设置
          </template>
          <MenuGroup title="用户">
            <MenuItem name="5-1">个人资料</MenuItem>
            <MenuItem name="5-2">修改密码</MenuItem>
            <MenuItem name="5-3">投诉建议</MenuItem>
          </MenuGroup>
          <MenuGroup title="主题颜色">
            <RadioGroup v-model="theme1">
              <MenuItem name="5-4">
                <Radio label="light"></Radio>
              </MenuItem>
              <MenuItem name="5-5">
                <Radio label="dark"></Radio>
              </MenuItem>
            </RadioGroup>
          </MenuGroup>
        </Submenu>
      </Menu>
      <br>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      theme1: "dark"
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
#Home {
  //   .logo {
  //     display: inline-block;
  //     position: absolute;
  //     top: 0px;
  //     left: 20px;
  //     z-index: 901;
  //     .logo-img {
  //       display: inline-block;
  //       width: 60px;
  //     }
  //   }
  .home-box {
    min-height: 100vh;
    .placeholder{
        height: 60px;
    }
    .menu-box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .ivu-menu-dark{
        background-color: #1f2f52;
    }
  }
  .light {
  }
  .dark {
    background-color: #bfc5db;
  }
}
// 自定义样式buttom
</style>