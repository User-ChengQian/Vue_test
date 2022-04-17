<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <!-- 使用全局组件mycount -->
    <mycount :init="5"></mycount>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
h3{
  color: red;
}
 /deep/ h5{
  color: green;
}
</style>
