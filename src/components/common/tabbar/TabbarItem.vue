<template>
    <div class="tabbar-item" @click="itemClick">
      <div v-if="!isAction"> <slot name="item-icon"></slot> </div>
      <div v-else> <slot name="item-icon-active"></slot> </div>
      <div :style="activeStyle"> <slot name="item-text"></slot> </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      deColor: ''
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    },
  },
  computed: {
    // 由计算属性动态的决定 当前活跃状态
    isAction() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isAction ? {color: this.activeColor} : {}
    },
  },
  methods: {
    itemClick() {
      // 解决重复点击tabbar报错问题
      // 方式一
      if (this.$route.path === this.path) return
      this.$router.push(this.path)
      // 方式二
      // this.$router.push(this.path).catch(err => {})
    },
  }
}
</script>

<style>
.tabbar-item {
  flex: 1;
  height: 49px; 
  font-size: 14px;
  text-align: center;
}

.tabbar-item img {
  width: 24px;
  height: 24px;
  /* 图片会有3px的间隙，用 vertical-align: middle 可以解决 */
  vertical-align: middle;
  margin: 3px 2px;
}
</style>