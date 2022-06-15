<template>
  <nav-bar>
      <div slot="left" class="goBack" @click="goBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" v-for="(item,index) in titles" :key="index" @click="activeClick(index)" :class="{active: currentIndex == index}">
        {{item}}
      </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      // 返回上一层
      goBack() {
        this.$router.go(-1)
      },
      // 点击切换currentIndex下标值
      activeClick(index) {
        this.currentIndex = index
        this.$emit('activeClick', index)
      },
    }
  }
</script>

<style lang="scss" scoped>
.goBack {
  width: 100%;
  height: 44px;
  img {
    margin-top: 10px;
  }
}
.active {
  color: var(--color-tint);
}
</style>