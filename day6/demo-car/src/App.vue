<template>
  <div class="app-container">
    <Header></Header>
    <Goods v-for="item in list" :key="item.id" :title="item.goods_name" :pic="item.goods_img" :price="item.goods_price" :state="item.goods_state" :id="item.id" @state-change="getNewState" :count="item.goods_count">

<Counter :num="item.goods_count" @number-change="getNewNum(item,$event)"></Counter>
    </Goods>
    <Footer :isfull="fullState" @full-change="getFullState" :amout="amt" :all="all"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue"
import Goods from "@/components/Goods/Goods.vue"
import axios from "axios"
import Footer from "@/components/Footer/Footer.vue"
import bus from "@/components/eventbus.js"
import Counter from "@/components/Counter/Counter.vue"
export default {
  data() {
    return {
      list:[],
      
    }
  },
  created() {
    this.initCarList(),
    bus.$on('share',val=>{
      this.list.forEach(item=>{
        if(item.id==val.id){
        item.goods_count=val.count
      }
      })
    })
  },
  components:{
    Header,
    Goods,
    Footer,
    Counter
  },methods:{
    getNewNum(item,num){
      item.goods_count=num
    },
    getFullState(e){
      this.list.forEach(item=>item.goods_state=e)
    },
    show(){console.log(this.list.filter(item=>item.goods_state).reduce((sum,item)=>sum+=item.goods_count*item.goods_price,0));},
    getNewState(e){
      console.log("-------------");
      console.log(e);
      this.list.some((item,index)=>{
        if(item.id==e.id){
          item.goods_state=e.value
        }
      })
    },
   async initCarList(){
    const {data:res}= await axios.get('https://www.escook.cn/api/cart')
      if(res.status==200){ 
        this.list=res.list
        console.log(res.list);
      }
    
    }
  },
  computed:{
    fullState(){
    return  this.list.every(item=>item.goods_state)
    },
    amt(){
      return this.list.filter(item=>item.goods_state).reduce((sum,item)=>sum+=item.goods_count*item.goods_price,0)
    },
    //结算总件数
    all(){
      return this.list.filter(item=>item.goods_state).reduce((sum,item)=>sum+=item.goods_count,0)
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
