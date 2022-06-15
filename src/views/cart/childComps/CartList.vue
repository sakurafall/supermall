<template>
  <div id="cartList">
    <scroll class="content" ref="scroll">
      <cart-list-item class="cartListItem" v-for="(item, index) in cartList" :key="index" :cartItem="item"/>
    </scroll>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

import Scroll from 'components/common/scroll/Scroll'

import { mapGetters } from 'vuex'
export default {
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="scss" scoped>
#cartList {
  font-size: 24px;
  height: calc(100vh - 44px - 49px - 44px);
  .content {
    height: 100%;
    overflow: hidden;
  }
  .cartListItem:last-child {
    border-bottom: 0;
  }
}
</style>