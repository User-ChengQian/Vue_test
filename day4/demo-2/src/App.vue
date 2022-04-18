<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <h2>{{count}}</h2>
    <hr>
<left :msg="message" :user="userinfo"></left>
<right @numberchange="getcount"></right>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
    </div>
  </div>
</template>

<script>
//子组件left,父向子传递数据
import left from "@/components/Left.vue"
//子组件right,子向父传递数据
import right from "@/components/Right.vue"
export default {
  components:{
    left,
    right
  },
  data(){
    return{
      message:'父传子数据',
      userinfo:{name:'wahaha',age:18},
      count:0
    }
  },methods: {
    getcount(val){
      //将传递过来的值赋值给定义的count
this.count=val
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
