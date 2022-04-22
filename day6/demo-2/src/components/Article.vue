<template>
  <div class="article-container">
      <div class="header-box">
          <slot name="header" msg="hello slot"></slot>
      </div>
      <div class="content-box">
          <slot name="content" :msg="msg"></slot>
      </div>
      <div class="footer-box">
          <slot name="footer" :msg="content" msg2="this is a message"></slot>
      </div>
  </div>

</template>

<script>
export default {
    data() {
        return {
            msg:"this is obj message",
            content:{
                age:20,
                sex:"girl"
            }
        }
    },
name:'Article'
}
</script>

<style lang="less" scoped>
.article-container{
    > div{
        min-height: 150px;
        min-width: 300px;
    }
    .header-box{
        background-color: pink;
    }
    .content-box{
        background-color: lightblue;
    }
    .footer-box{
        background-color: lightsalmon;
    }
}


</style>