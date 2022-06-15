<template>
  <div id="home">
    <nav-bar class="homeNav"><div slot="center">购物街</div></nav-bar>
    <tab-control  v-show="showTabControl" class="tabcontrolTop" @clickActive="clickActive" :titles="tabType" ref="tabcontrolTop"></tab-control>
    <scroll class="content" :probeType="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="loadMore" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control @clickActive="clickActive" :titles="tabType" ref="tabcontrolBottom"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"

  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/scroll/Scroll"
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/goods/GoodsList/"

  import {getHomeMultidata, getHomeGoods} from "network/home/index.js"

  import { itemListenerMixin, backTopMixin } from "common/mixin"
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      tabType: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      showTabControl: false,
      saveY: 0,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  activated() {
    // this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // this.$refs.scroll.refresh()
  },
  deactivated() {
    // 1. 保存Y值
    // this.saveY = this.$refs.scroll.getCurrentY()

    // 2. 取消全局事件的监听
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  created() {
    this.getHomeDataFun();

    this.getHomeGoodsFun('pop')
    this.getHomeGoodsFun('new')
    this.getHomeGoodsFun('sell')

  },
  methods: {
    // 切换currentType的商品类型
    clickActive(index) {
      this.currentType = Object.keys(this.goods)[index]

      this.$refs.tabcontrolTop.currentIndex = index
      this.$refs.tabcontrolBottom.currentIndex = index
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoodsFun(this.currentType)
    },

    // 根据position距离显示隐藏backTop图标/显示隐藏tabControlTop
    contentScroll(position) {
      this.listenerBackTop(position);
      const tabControlHeight = this.$refs.tabcontrolBottom.$el.offsetTop
      this.showTabControl = -position.y > tabControlHeight
    },

    

    /*
     *网络请求
     */
    // 轮播、推荐数据请求
    getHomeDataFun() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // 商品数据请求
    getHomeGoodsFun(type) {
      const page = this.goods[type].page + 1
      getHomeGoods({
        type: type,
        page: page
      }).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUpFun()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
}
.homeNav {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  background: var(--color-tint);
  z-index: 9;
}
.tabcontrolTop {
  position: relative;
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

</style>>