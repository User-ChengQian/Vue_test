<template>
  <div class="left-container">
    <h3>Left 组件</h3>
<p>{{msg}}</p>
<p>{{user}}</p>
<h1>{{count}}</h1>
  </div>
</template>

<script>
import bus from "@/components/eventbus.js"
export default {
  props:['msg','user'],
  //接收right兄弟级传递的数据
  data() {
    return {
      count:0
    }
  },created() {
    bus.$on('share',val=>{{
      this.count=val
    }})
  },
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
