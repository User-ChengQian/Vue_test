<template>
  <div class="right-container">
    <h3>Right 组件</h3>
  <slot name="mySolt">
    <h1>你未使用v-slot指定该插槽</h1>
  </slot>

  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
