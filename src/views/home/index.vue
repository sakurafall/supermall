<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import HomeSwiper from "views/home/childComps/homeSwiper/HomeSwiper"
import RecommendView from "views/home/childComps/recommendView/RecommendView"


import {getHomeMultidata} from "network/home/index.js"


export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style lang="scss" scoped>
.home-nav {
  background: var(--color-tint);
}

</style>>