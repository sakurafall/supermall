<template>
  <div class="shopInfo">
    <div class="shopTop" v-if="Object.keys(shop).length !== 0">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shopMiddle">
      <div class="shopMiddleLeft">
        <div>
          <div class="sellsCount">{{shop.sells | sellsCountFilter}}</div>
          <div class="sellsText">总销量</div>
        </div>
        <div>
          <div class="sellsCount">{{shop.goodsCoundt}}</div>
          <div class="sellsText">全部宝贝</div>
        </div>
      </div>
      <div class="shopMiddleRight">
        <table class="table">
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{scoreBetter: item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{betterMore: item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopEnter">
      <div class="enter">进店逛逛</div>
    </div>
    

  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sellsCountFilter(value) {
      if (value < 10000) return value;
      return (value/10000).toFixed(1) + '万'
    }
  },
}
</script>

<style lang="scss" scoped>
.shopInfo {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shopTop {
  display: flex;
  align-items: center;
  height: 45px;
  font-size: 16px;
  img {
    width: 45px;
    height: 45px;
    margin-right: 10px;
    border: 1px solid rgba(0, 0, 0, .1);
    border-radius: 50%;

  }
}
.shopMiddle {
  display: flex;
  align-items: center;
  height: 80px;
  margin-top: 15px;
  .shopMiddleLeft {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    color: #333;
    height: 45px;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
    .sellsCount {
      font-size: 18px;
    }
    .sellsText {
      font-size: 13px;
      margin-top: 10px;
    }
  }
  .shopMiddleRight {
    display: flex;
    justify-content: center;
    flex: 1;
    color: #333;
    font-size: 13px;
    .table {
      width: 120px;
      height: 80px;
      .score, .better {
        color: #5ea732;
      }
      .better {
        color: #fff;
        text-align: center;
        background: #5ea732;
        padding: 3px;
      }
      .scoreBetter {
        color: #f13e3a;
      }
      .betterMore {
        background: #f13e3a;
      }
    }
  }
}
.shopEnter {
  text-align: center;
  margin-top: 10px;
  .enter {
    display: inline-block;
    width: 150px;
    height: 30px;
    color: #666;
    font-size: 14px;
    line-height: 30px;
    background: #f2f5f8;
    border-radius: 10px;
  }
}


</style>