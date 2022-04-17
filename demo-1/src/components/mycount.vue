<template>
  <div>
      <h5>count 组件</h5>
      <p>count的值是:{{count}}</p>
      <button @click="count++">+1</button>
      <button @click="show">打印this</button>
  </div>
</template>

<script>
export default {
    props:{
        init:{
            default:9,
            type:Number,
            // 必传初始值否则报错
            required:true

        }
    },
data(){
    return{
        //init仅作初始化,++仍是count进行
        count:this.init
    }
},methods:{
    show(){
        console.log(this);
    }
}
}
</script>

<style>

</style>