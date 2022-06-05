<template>
  <div class="recomment">
      <div class="recommentItem" v-for="(item, index) in recommends" :key="index">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.recomment {
  display: flex;
  width: 100%;
  text-align: center;;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recommentItem {
  flex: 1;
  img {
    width: 70px;
    margin-bottom: 10px;
  }
}
</style>