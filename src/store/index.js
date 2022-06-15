import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutactions'
import actions from './actions'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建store对象
const state = {
  cartList: []
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
