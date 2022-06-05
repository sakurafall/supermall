<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style>
#tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: #f6f6f6;
  box-shadow: 0px -1px 1px  rgba(100, 100, 100, 0.2);
}

</style>