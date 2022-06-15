<template>
  <div id="paramInfo" v-if="Object.keys(paramInfo).length !== 0">
      <p>参数信息</p>

      <table class="paramSizes" v-for="(table, index) in paramInfo.sizes" :key="index">
        <tr v-for="(tr, indey) in table" :key="indey">
          <td v-for="(td, indez) in tr" :key="indez">{{td ? td : '-'}}</td>
        </tr>
      </table>

      <table class="paramInfos">
        <tr v-for="(item, index) in  paramInfo.infos" :key="index">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>

      <div class="paramImage">
        <img :src="paramInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#paramInfo{
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
  p {
    font-size: 15px;
    margin: 0 0 10px;
  }
  .paramSizes, .paramInfos {
    width: 100%;
    font-size: 14px;
    border-collapse: collapse;
    tr {
      height: 42px;
      td {
        border-bottom: 1px solid hsla(0, 0%, 39.2%,.1);
      }
    }
  }
  .paramInfos {
    .key {
      width: 95px;
    }
    .value {
      color: #eb4868;
    }
  }
  .paramImage {
    img {
      width: 100%;
    }
  }
}

</style>