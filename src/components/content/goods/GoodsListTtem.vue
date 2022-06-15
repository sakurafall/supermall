<template>
  <div id="goodsListItem" @click="toDetailPage">
    <div class="goodsItem">
      <img class="goodsItemImg" :src="imageShow" @load="imgLoad">
      <p class="goodsItemTitle">{{goodsItem.title}}</p>
      <div class="goodsItemInfo">
        <span class="goodsItemPrice">￥{{goodsItem.price}}</span>
        <span>★{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    imageShow() {
      // 位置不能调换，因为不能判断一个不存在的值里边有没有其它值
      return this.goodsItem.image || this.goodsItem.show.img 
    }
  },
  methods: {
    // 跳转到详情页
    toDetailPage() {
      this.$router.push({
        path: `/detail/${this.goodsItem.iid}`,
      })
    },
    // 发射事件总线
    imgLoad() {
      /* 根据路由判断，要不要发射事件 */
      if (this.$route.path.indexOf('/home') !== -1) {
        this.$bus.$emit("itemImgLoad")
      } else if (this.$route.path.indexOf('/detail') !== -1) {
        this.$bus.$emit("itemImgLoad")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.goodsItem {
  flex: 1;
  width: 170px;
  font-size: 14px;
  .goodsItemImg {
    width: 100%;
    height: 250px;
    border-radius: 5px;
    object-fit: cover;
  }
  .goodsItemTitle {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 0;
  }
  .goodsItemInfo {
    margin-bottom: 3px;
    .goodsItemPrice {
      color: var(--color-high-text);
      margin-right: 8px;
    }
  }
}
</style>