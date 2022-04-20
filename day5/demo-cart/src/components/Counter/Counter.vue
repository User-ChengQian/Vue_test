<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="reduce">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{count}}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
import bus from "@/components/eventbus.js"
export default {
  props:{
    count:{
      type:Number,
      default:0
    },
    id:{
      type:Number,
      required:true
    }
  },
  methods: {
    add(){
      const obj={id:this.id,count:this.count+1}
      // console.log(obj);
      bus.$emit('share',obj)
    },
    reduce(){
      if(this.count==0) return
      const obj={id:this.id,count:this.count-1}
      // console.log(obj);
      bus.$emit('share',obj)
    }
  },
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
