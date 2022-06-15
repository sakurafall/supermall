<template>
  <span>
    <div v-if="Object.keys(commentInfo).length !== 0" class="commentInfo">

      <div class="commentTop">
        <div class="title">用户评价</div>
        <div class="more">
          <span>更多</span>
          <span class="arrow-right"> 〉</span>
        </div>
      </div>

      <div class="user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="appraise">{{commentInfo.content}}</div>
      <div class="other">
        <span class="time">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="image">
        <img v-for="(item, index) in commentInfo.images" :key="index" :src="item">
      </div>

    </div>
    <div v-else class="commentInfo commentNull" >暂无用户评论</div>
  </span>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000);
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style lang="scss" scoped>
.commentInfo {
  color: #333;
  padding: 5px 12px;
  border-bottom: 5px solid #f2f5f8;
}
.commentTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  .more {
    font-size: 13px;
    .arrow-right {
      margin-left: 3px;
    }
  }
}
.user {
  display: flex;
  align-items: center;
  padding: 10px 0 5px;
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  span {
    font-size: 15px;
    margin-left: 10px;
  }
}
.appraise {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.other {
  color: #999;
  font-size: 12px;
  margin-top: 10px;
  .time {
    margin-right: 8px;
  }
}
.image {
  margin-top: 10px;
  img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
}
.commentNull {
  color: #eb4868;
  font-size: 16px;
}
</style>