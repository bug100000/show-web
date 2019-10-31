import Vue from 'vue'
import Router from 'vue-router'
import config from './utils/config'

// 使用路由懒加载
function loadView(view) {
  return () => import( /* webpackChunkName: "view-[request]" */ `./spa/${view}.vue`)
}

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: config.publicDir,
  routes: [
    {
      path: '/',
      redirect: "/Home"
    }, {
      path: '/Home',
      name: 'Home',
      component: loadView("Home"),
      redirect: "/Home/Index",
      children: [{
        path: "/Home/Index",
        name: "Index",
        component: loadView("Home/Index"),
      },{
        path: "/Home/Video",
        name: "Video",
        component: loadView("Home/Video"),
      },{
        path: "/Home/VideoDetail",
        name: "VideoDetail",
        component: loadView("Home/VideoDetail"),
      },{
        path: "/Home/Audio",
        name: "Audio",
        component: loadView("Home/Audio"),
      },{
        path: "/Home/Word",
        name: "Word",
        component: loadView("Home/Word"),
      },{
        path: "/Home/WordDetail",
        name: "WordDetail",
        component: loadView("Home/WordDetail"),
      },{
        path: "/Home/WordAdd",
        name: "WordAdd",
        component: loadView("Home/WordAdd"),
      },{
        path: "/Home/PictureUpload",
        name: "PictureUpload",
        component: loadView("Home/PictureUpload"),
      }]
    }
  ]
})
