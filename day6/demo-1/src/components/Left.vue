<template>
  <div class="left-container">
    <h3>Left 组件----{{number}}</h3>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name:"myLeft",
  created(){
    console.log("com is created");
  },
  destroyed() {
    console.log("com is destroyed");
  },
  data() {
    return {
      number:0,
    }
  },
  methods: {
    add(){
      this.number++
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
