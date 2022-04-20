<template>
  <div class="left-container">
    <h3>Left 组件---{{number}}</h3>
    <button @click="add">+1</button>
    <button @click="clear">reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number:8
    }
  },
  methods: {
    add(){
      this.number++
    },
    clear(){
      this.number=0
    }
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
