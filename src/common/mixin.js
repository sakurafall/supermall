import {debounce} from 'common/utils'

import BackTop from "components/content/backTop/BackTop/"


const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 这个地方的img标签确实被挂载，但是其中的图片还没有占据高度
    // this.$refs.scroll.refresh对这个函数进行防抖操作
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    // 对监听的事件进行保存
    this.itemImgListener = () => { newRefresh() }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      showBackTop: false,
    }
  },
  methods: {
    // 返回顶部
    backClick() {
      this.$refs.scroll.goBackTop(0, 0, 300)
    },
    // backTop显示
    listenerBackTop(position) {
      this.showBackTop = -position.y > 1000 
    },
  }
}

export {
  itemListenerMixin,
  backTopMixin
}