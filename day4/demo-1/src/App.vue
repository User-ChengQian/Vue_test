
<template>
  <div class="app-container">
    <h1>App 根组件</h1>

    <test v-if='flag'></test>
<button @click="flag=!flag">切换</button>
    <hr />
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
<left></left>
<right></right>
    </div>
  </div>
</template>

<script>
//导入组件
import left from "@/components/Left.vue"
import right from "@/components/Right.vue"
import test from"@/components/test.vue"
export default {

  data() {
    return {
      flag:true
    }

},
//注册组件
components:{left,right,test}

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
