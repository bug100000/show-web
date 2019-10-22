// 引入功能、组件
import Vue from 'vue'
import Axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// 引入自定义
// 组件
import App from './App'

// js
import router from './router.js'
import commonFun from './utils/commonFun.js'
import commonVar from './utils/commonVar.js'
import './utils/rem.js'

// css
import './assets/css/common.css'

// 配置Vue
Vue.config.productionTip = false
Vue.use(ViewUI);

/* eslint-disable no-new */
// 创建实例
new Vue({
  el: '#app',
  commonFun,
  commonVar,
  Axios,
  router,
  render: h => h(App)
})
