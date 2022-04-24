<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <button @click="get">发起get请求</button>
  </div>
</template>

<script>
export default {
  methods: {
    async get() {
      const { data: res } = await this.$http.get('/api/getbooks')
      console.log(res)
    }
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
