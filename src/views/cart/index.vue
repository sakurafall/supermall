<template>
  <div id="cart">
    <nav-bar class="cartNavbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import CartList from './childComps/CartList.vue'
  import CartBottomBar from './childComps/CartBottomBar.vue'

  import NavBar from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'
export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
}
</script>

<style lang="scss" scoped>
#cart {
  height: 100%;
}
.cartNavbar {
  color: #fff;
  background: #ff8198;
}
</style>