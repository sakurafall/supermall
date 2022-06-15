import {
  ADD_COUNT,
  ADD_TO_CART,
  NEW_ADD_TO_CART
} from './mutactions-types'

export default {
  // mutations唯一的目的就是修改state中的状态
  // mutations中的每个方法尽可能完成的事件比较单一，便于devtools记录
  // 异步操作和复杂的逻辑处理放在actions中
  
  [ADD_COUNT](state, goods) {
    goods.count ++
  },
  [ADD_TO_CART](state, goods) {
    state.cartList.push(goods)
  },
  [NEW_ADD_TO_CART](state, goods) {
    state.cartList = goods;
  }
}