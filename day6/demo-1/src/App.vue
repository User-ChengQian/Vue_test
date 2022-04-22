<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />
<button @click="toggleLeft">Left</button>
<button @click="toggleRight">Right</button>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <!-- <keep-alive include="Left"> -->
      <keep-alive include="myLeft">
      <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"
import Right from "@/components/Right.vue"
export default {
  data() {
    return {
      comName:'Left'
    }
  },
  components:{
    Left,
    Right
  },
  methods: {
    toggleLeft(){
      this.comName="Left"
    },
    toggleRight(){
      this.comName="Right"
    }
  },
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
