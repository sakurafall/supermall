<template>
  <div class="cartBar">
    <div class="checkAll">
      <check-button class="checkImg" :checkBtn="isSelectAll" @click.native="checkClick"></check-button>
      <div>全选</div>
    </div>
    <div class="calc">
      合计: ￥
      <span class="price">{{totalPrice}}</span>
      元
    </div>
    <div class="commit" @click="commitClick">
      提交订单({{goodsNum}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
          return item.checked
        }).reduce((prev, item) => {
          return prev += item.price * item.count
        },0).toFixed(2)
    },
    goodsNum() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;

      // 1. filter 过滤
      // return !this.cartList.filter(item => !item.checked).length

      // 2. find 返回一个的
      // return !this.cartList.find(item => !item.checked)

      // 3. every 一假全假
      return this.cartList.every(item => item.checked)

      // 4. some 一真全真
      // return !this.cartList.some(item => !item.checked)

      // 5. 普通遍历
      // for(let item of this.cartList) {
      //   if(!item.checked) return false
      // }
      // return true
    }
  },
  methods: {
    ...mapActions(['unCheckedCart']),
    checkClick() {
      if (this.isSelectAll) { // 全部选中
        this.cartList.forEach(item => item.checked = false)
      } else { // 部分或全部不选中
        this.cartList.forEach(item => item.checked = true)
      }
    },
    commitClick() {
      if(!this.cartList.find(item => item.checked)) {
        this.$toast.isShow('请选择要购买的商品', 2000)
      } else {
        this.$toast.isShow(`成功提交${this.goodsNum}条数据`, 2000)
        // 筛选出未选中的数据，用它替换原来的数据
        let goodsCommit = this.cartList.filter(item => !item.checked)
        this.unCheckedCart(goodsCommit).then(res => {return})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cartBar {
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 44px;
  color: #666;
  font-size: 14px;
  line-height: 44px;
  border-top: 1px solid rgba(0, 0, 0, .1);
  padding: 0 0 0 10px;
}
.checkAll {
  display: flex;
  align-items: center;
  line-height: 20px;
  text-align: center;
  .checkImg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
}
.calc {
  .price {
    color: #ff4500;
  }
}
.commit {
  width: 120px;
  color: #fff;
  font-size: 15px;
  text-align: center;
  background: linear-gradient(90deg,#ff6034,#ee0a24);
  padding: 0 10px;
}
</style>