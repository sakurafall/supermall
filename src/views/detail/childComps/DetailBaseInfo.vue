<template>
  <div class="baseInfo" v-if="Object.keys(goods).length !== 0">
    <div class="titleInfo">
      <p>{{goods.title}}</p>
    </div>
    <div class="priceInfo">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount"  v-if="goods.oldPrice">{{goods.discount}}</span>
    </div>
    <div class="tagInfo">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length - 1].name}}</div>
    </div>
    <div class="otherInfo">
      <div class="otherInfoItem" v-for="index in goods.services.length - 1" :key="index" v-show="goods.services[index-1].icon">
        <img class="otherInfoImg" :src="goods.services[index-1].icon" alt="">
        <div>{{goods.services[index-1].name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.baseInfo {
  color: #999;
  width: 100%;
  padding: 0 10px;
  margin-top: 15px;
  border-bottom: 5px solid #f2f5f8;
}
.titleInfo {
  color: #222;
  font-size: 16px;
  text-align: justify;
}
.priceInfo {
  margin-top: 10px;
  .n-price {
    color: #ff5777;
    font-size: 24px;
  }
  .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount {
    position: relative;
    top: -4px;
    color: #fff;
    font-size: 12px;
    background: #f13e3a;
    border-radius: 5px;
    padding: 3px 6px;
    margin-left: 5px;
  }
}
.tagInfo {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  line-height: 30px;
  border-bottom: 1px solid hsla(0,0%,39.2%,.1);
  margin-top: 15px;
}
.otherInfo, .otherInfoItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #333;
  line-height: 60px;
  .otherInfoImg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
}
</style>