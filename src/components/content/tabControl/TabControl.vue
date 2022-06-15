<template>
  <div class="tabControl">
    <div class="tabControlItem" v-for="(item, index) in titles" :key="item" @click="clickActive(index)">
      <span :class="{active: currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    clickActive(index) {
      this.currentIndex = index
      this.$emit('clickActive', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.tabControl {
  display: flex;
  text-align: center;
  background: #fff;

}
.tabControl .tabControlItem {
  flex: 1;
  height: 40px;
  font-size: 15px;
  line-height: 40px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
  padding-bottom: 3px;
}
</style>