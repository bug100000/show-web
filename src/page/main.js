// 引入模块
import Vue from 'vue'
import Axios from 'axios'

// 引入css
import '../assets/css/common.css'

// 引入组件
import App from './App'

// 引入配置
import router from './router.js'
import commonFun from '../utils/commonFun.js'
import commonVar from '../utils/commonVar.js'
import '../utils/rem.js'

Vue.config.productionTip = false

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
