<template>
  <div id="detail">
    <nav-bar class="detailNavbar" ref="navbar" @activeClick="activeClick"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <swiper :topImages="topImages"/>
      <base-info :goods="goods"/>
      <shop-info :shop="shop"/>
      <images-info :imagesInfo="imagesInfo" @imgLoad="imgload"/>
      <param-info ref="param" :paramInfo="paramInfo"/>
      <comment-info ref="comment" :commentInfo="commentInfo"/>
      <goods-list ref="recommend" :goodsList="recommends" :showRecommend="true"/>
    </scroll>
    <bottom-bar @addCart = "addToCart"/>
    <back-top @click.native="backClick" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from './childComps/DetailNavBar'
import Swiper from './childComps/DetailSwiper'
import BaseInfo from './childComps/DetailBaseInfo'
import ShopInfo from './childComps/DetailShopInfo'
import ImagesInfo from './childComps/DetailImagesInfo'
import ParamInfo from './childComps/DetailParamInfo'
import CommentInfo from './childComps/DetailCommentInfo'
import BottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {debounce} from "common/utils"
import { itemListenerMixin, backTopMixin } from "common/mixin"
import {mapActions} from 'vuex'

import {
  getDetail, 
  getRecommend,
  Goods,
  Shop,
  Param,
} from 'network/detail/index.js'

export default {
  name: "detail",
  components: {
    NavBar,
    Swiper,
    BaseInfo,
    ShopInfo,
    ImagesInfo,
    ParamInfo,
    CommentInfo,
    BottomBar,

    Scroll,
    GoodsList,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      imagesInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    }
  },
  created() {
    // 1. 获取iid
    this.iid = this.$route.params.iid

    // 2. 请求详情数据
    this.init()

    // 给getThemeTopY赋值(并对赋值进行防抖处理)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    }, 100)
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  methods: {
    ...mapActions(['addCart']),
    // 点击添加到购物车
    addToCart() {
      // 1. 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2. 将商品添加到购物车里
      this.addCart(product).then(res => {

        this.$toast.isShow(res, 1500)
      })
    },
    // 主体滚动，标题跟着滑动
    contentScroll(position) {
      const positionY = -position.y
      let length = this.themeTopYs.length
      for(let i = 0; i < length - 1; i++) {
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex
        }

        this.listenerBackTop(position);
      }
    },
    imgload() {
      this.$refs.scroll.refresh();
      // 给getThemeTopY赋值
      this.getThemeTopY()
    },
    // 点击标题，滚动到对应的主体
    activeClick(index) {
      this.$refs.scroll.goBackTop(0, -this.themeTopYs[index], 200)
    },
    /**
     * 网络请求
    **/
    init() {
      // 获取详情页数据
      getDetail({
        iid: this.iid
      }).then(res => {
        // console.log(res);
        const data = res.result
        // 1. 获取顶部图片的轮播数据
        this.topImages = res.result.itemInfo.topImages

        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3. 获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 4. 获取详情图片信息
        this.imagesInfo = data.detailInfo

        // 5. 获取商品参数信息
        this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)

        // 6. 获取评价信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      });
      // 获取详情页商品推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  position: relative;
  height: 100vh;
  background: #fff;
  z-index: 9;
}
.detailNavbar {
  position: relative;
  background: #fff;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
}
</style>