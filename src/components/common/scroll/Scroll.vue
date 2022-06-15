<template>
  <div id="scroll" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  import ObserveImage from '@better-scroll/observe-image'
  BScroll.use(Pullup)
  BScroll.use(ObserveImage)
export default {
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    // 1. 创建BScroll实例
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeImage: true // 开启 observe-image 插件
    })

    // 2. 监听滚动事件
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })

    // 3. 监听scroll滚动到底部
    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    goBackTop(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUpFun() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style>

</style>