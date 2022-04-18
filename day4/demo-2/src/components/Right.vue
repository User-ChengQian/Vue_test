<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <button @click="add">+1</button>
    <button @click="add2">+2</button>
    <span>{{count}}</span>
  </div>
</template>

<script>
import bus from "@//components/eventbus.js"
export default {
  data() {
    return {
      count:0
    }
  },methods: {
    add(){
      this.count++
      this.$emit('numberchange',this.count)
    },add2(){
      this.count+=2
      bus.$emit('share',this.count)
    }
  },
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
