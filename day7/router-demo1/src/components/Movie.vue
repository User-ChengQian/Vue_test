<template>
  <div class="movie-container">
    <h3>Movie 组件----{{id}}</h3>
    <button>展示id</button>
  </div>
</template>

<script>
export default {
  props: ['id'],

  name: 'Movie'
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
