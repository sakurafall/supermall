<template>
  <div id="app">
    <keep-alive exclude="detail"><router-view/></keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  components: {
    MainTabBar
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
</style>
