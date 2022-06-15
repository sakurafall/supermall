<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  display: flex;
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .2);
}
.navbar .center {
  flex: 1;
  display: flex;
  justify-content: space-around;
}
.left, .right {
  width: 60px;
}

</style>