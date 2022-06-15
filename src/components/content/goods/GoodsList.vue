<template>
  <div>
    <p class="showRecommend" v-if="showRecommend">推荐商品</p>
    <div class="goodsList">
    <goods-list-item v-for="(item,index) in goodsList" :key="index" :goodsItem="item">
    </goods-list-item>
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListTtem.vue'
export default {
  components: {
    GoodsListItem
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    },
    showRecommend: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsList {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
}
.showRecommend {
  color: #666;
  font-size: 15px;
  padding: 10px 0 10px 15px;
}
</style>