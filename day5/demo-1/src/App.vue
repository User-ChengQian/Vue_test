<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="changeColor">h1变色</button>
    <button @click="showleft">重置子组件数字</button>
    <hr>
    <input type="text" v-if="showipt" @blur="hiddenipt" ref="ipts">
    <button v-else @click="cshowipt">展示输入框</button>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left ref="myleft"></Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue"
export default {
  data() {
    return {
      showipt:true
    }
  },
  methods: {
    hiddenipt(){
      this.showipt=false
    },
    cshowipt(){
      this.showipt=true
      console.log(this);
      // this.$refs.ipts.focus()
      this.$nextTick(()=>{
      this.$refs.ipts.focus()

      })

    },
    changeColor(){
      this.$refs.myh1.style.color="purple"
    },
    showleft(){
      // console.log(this);
      this.$refs.myleft.number=0
    }
  },
 components:{
   Left
 }
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
