import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import "assets/css/base.css"
// 移动端适配
import 'lib-flexible'
// 引入toast插件
import Toast from 'components/common/toast'
// 引入fastclick
import FastClick from 'fastclick'
// 引入vue-lazyload
import Lazyload from 'vue-lazyload'
// 安装toast插件
Vue.use(Toast)

Vue.config.productionTip = false

// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟问题
FastClick.attach(document.body)

// 使用懒加载插件
Vue.use(Lazyload, {
  // 未加载的占位图片
  loading: require("assets/img/common/placeholder.png")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
