<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view/>
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
@import "~assets/css/base.css"
</style>
