<template>
  <div id="imagesInfo" v-if="Object.keys(imagesInfo).length !== 0">
    <div class="imagesDesc">
      <div class="start"></div>
      <div class="desc">{{imagesInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="imagesInfoList" v-for="(item, index) in imagesInfo.detailImage" :key="index">
      <div class="key">{{item.key}}</div>
      <div>
        <img class="images" v-for="(img, imgIndex) in item.list" :key="imgIndex" :src="img" @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagesInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      if(++this.count == this.imagesLength) {
        this.$emit('imgLoad');
      }
    }
  },
  watch: {
    imagesInfo() {
      this.imagesLength = this.imagesInfo.detailImage[0].list.length
    }
  }
}
</script>

<style lang="scss" scoped>
#imagesInfo {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.imagesDesc {
  color: #666;
  font-size: 14px;
  padding: 0 15px;
  .desc {
    padding: 15px 0;
  }
  .start, .end {
    position: relative;
    width: 90px;
    height: 1px;
    background: #a3a3a5;
  }
  .start {
    float: left;
  }
  .start::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #333;
  }
  .end {
    float: right;
  }
  .end::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    background: #333;
  }
}
.imagesInfoList {
  .key {
    color: #333;
    font-size: 15px;
    padding: 10px 15px;
  }
  .images {
    width: 100%;
  }
}
</style>