<template>
  <div class="test-container">
      <h3 class="myh3">test.vue组件-----{{ books.length }}本图书</h3>
      <p id="pppp">message 的值是：{{ message }}</p>
    <button @click="message += '~'">修改 message 的值</button>
  </div>
</template>

<script>
export default {
props:['info'],
data(){
  return {
    message:'hello vue.js',
    books:[]
  }
},
watch:{
  message(newVal){
    console.log("监视到了message的变化"+newVal);
  }
},
methods: {
  show(){
    console.log("调用了Test组件的show方法");
  },
  initBookList(){
    const xhr=new XMLHttpRequest()
    xhr.addEventListener('load',()=>{
      const result=JSON.parse(xhr.responseText)
      console.log(result);
      this.books=result.data
    })
    xhr.open('get','http://www.liulongbin.top:3006/api/getbooks')
    xhr.send()
  }
},
//-------------created此时能拿到data,props中的数据,能调用methods中的方法
created(){
    // console.log(this.message);
    // this.initBookList()
},
//-------------beforemount还不能进行操作dom
beforeMount(){
const h3=document.querySelector('.myh3')
console.log(h3);
},
//-------------mounted此时已经进行了ui结构的渲染,能够操作dom
mounted() {
//  const h3= document.querySelector('.myh3')
//  console.log(h3);
},
// -------------beforeupdate和update
beforeUpdate(){
  // console.log("---------重新渲染");
  // console.log(this.message);
  // const h3=document.querySelector('#pppp')
  // console.log(h3.innerHTML);
  // 此时数据进行了修改,但是还未渲染到页面上
},
updated() {
  console.log("update阶段");
   console.log(this.message);
  const h3=document.querySelector('#pppp')
  console.log(h3.innerHTML);
},
// -------------beforedestroy和destroyed销毁阶段
beforeDestroy(){
  //当前仍可以进行dom的操作
  console.log('beforedestroy');
},
destroyed(){
  //当前dom结构已经被销毁,无法操作
}
}
</script>
<style>
.test-container{
height: 200px;
background-color: pink;
}

</style>