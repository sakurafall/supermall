<template>
  <div class="checkButton" :class="{isCheck: checkBtn}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    checkBtn: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.checkButton {
  border: 1px solid #cbccce;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
.isCheck {
  border-color: #ff4500;
  background: #ff4500;
}
</style>