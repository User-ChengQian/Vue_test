<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <hr />
    <button @click="color='green'">change color</button>
    <div class="box">
      <!-- 渲染 Right 组件和 Right 组件 -->
      <!-- <Right>
        <template #mySolt>
        <h1>slot content</h1>
        </template>
      </Right> -->
      <Article>
        <template #header="msg">
            <p>point header</p>
            <p>{{msg}}</p>
        </template>
        <template #content="msg">
          <div>
            <p>one</p>
            <p>tow</p>
            <p>point content</p>
            <p>{{msg}}</p>
          </div>
        </template>
<!-- //below is a empty obj -->
        <!-- <template #footer="msg">
  <div>ponint footer</div>
  <p>{{msg}}</p>
        </template> -->
        
        <template #footer="{msg,msg2}">
  <div>ponint footer</div>
  <!-- <p>{{ scope.msg}}</p>
  <p>{{ scope.msg.age}}</p>
  <p>{{ scope.msg.sex}}</p> -->
<p>{{msg.age}}</p>
<p>{{msg2}}</p>
        </template>
      </Article>
    </div>
  </div>
</template>

<script>
import Article from "@/components/Article.vue"
import Right from "@/components/Right.vue"
export default {
  components:{
    Right,
    Article
  },
  directives:{
    // color:{
    //   bind(el,binding){
    //     el.style.color=binding.value
    //   },
    //    update(el,binding){
    //     el.style.color=binding.value
    //   }
    // }
//     color(el,binding){
// el.style.color=binding.value
//     }
  },
  data() {
    return {
      color:"red"
    }
  },
  methods: {
    changeColor(){
      this.color="green"
      console.log(this.color);
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
