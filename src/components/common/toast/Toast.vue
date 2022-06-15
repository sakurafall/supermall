<template>
  <div id="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      show: false,
      clear: null
    }
  },
  methods: {
    isShow(message, delay=2000) {
      this.show = true
      this.message = message
      
      clearTimeout(this.clear)
      this.clear = setTimeout(() => {
        this.show = false
        this.message = ''
      },delay)
    }
  }
}
</script>

<style lang="scss" scoped>
#toast {
  position: fixed;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  background: rgba(0, 0, 0, .75);
  padding: 15px 20px;
  z-index: 10;
}
</style>