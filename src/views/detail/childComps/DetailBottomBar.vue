<template>
  <div id="bottomBar">
    <div class="bottomLeft">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottomRight">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="scss" scoped>
#bottomBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  color: #000;
  background: #fff;
  padding: 0 5px;
  border-top: 1px solid #ccc;
}
.bottomLeft .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin-bottom: 3px;
  background: url('~assets/img/detail/detail_bottom.png') 0 -53px/100%;
}
.bottomLeft {
  display: flex;
  justify-content: space-around;
  flex: 1;
  .shop {
    background-position: 0 -98px;
  }
  .select {
    background-position: 0 0px;
  }
}

.bottomRight {
  display: flex;
  justify-content: center;
  flex: 1;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  .cart, .buy {
    flex: 1;
    height: 44px;
    background: linear-gradient(90deg,#ffd01e,#ff8917);
    padding: 12.25px 5px 5px 5px;
  }
  .buy {
    background: linear-gradient(90deg,#ff6034,#ee0a24);
  }
  
}
</style>