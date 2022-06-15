<template>
  <div id="cartItem">
    <div class="cartLeft">
      <check-button class="btnImg" :checkBtn="cartItem.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="cartRight">
      <div class="itemImg">
        <img :src="cartItem.image" alt="">
      </div>
      <div class="itemInfo">
        <div class="title">{{cartItem.title}}</div>
        <div class="desc">商品描述: {{cartItem.desc}}</div>
        <div class="other">
          <div class="price">￥{{cartItem.price}}</div>
          <div class="count">x{{cartItem.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  components: {
    CheckButton
  },
  props: {
    cartItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.cartItem.checked = !this.cartItem.checked
    }
  }
}
</script>

<style lang="scss" scoped>
#cartItem {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.cartLeft {
  .btnImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }

}
.cartRight {
  display: flex;
  align-items: center;
  overflow: hidden;
  .itemImg {
    padding: 5px;
    img {
      display: block;
      width: 80px;
      height: 100px;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .itemInfo {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 88%;
    height: 100px;
    color: #333;
    font-size: 17px;
    padding: 5px 10px;
    overflow: hidden;
    .title, .desc {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc {
      color: #666;
      font-size: 14px;
    }
    .other {
      display: flex;
      justify-content: space-between;
      .price {
        color: #ff4500;
      }
    }
  }
}
</style>