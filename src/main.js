// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入mui组件
import "./assets/dist/css/mui.min.css"
import "./assets/dist/fonts/mui.ttf"
// import './assets/dist/js/mui'

// 导入mint-ui组件
import { Swipe,Header,SwipeItem,Button } from 'mint-ui'
// 导入css文件
import "mint-ui/lib/style.css"
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
