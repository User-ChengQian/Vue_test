<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/movie/1">电影1</router-link>
    <router-link to="/movie/2">电影2</router-link>
    <router-link to="/movie/3">电影3</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/main">进入权限主页</router-link>
    <hr />
    <button @click="gotoLK">通过push跳到洛基页面</button>
    <button @click="gotoLK2">通过replace跳到洛基页面</button>
    <button @click="goback">后退一页</button>
    <button @click="goback2">后退一页2</button>
    <button @click="forward">前进一页</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    gotoLK() {
      this.$router.push('/movie/1')
      console.log(this)
    },
    gotoLK2() {
      this.$router.replace('/movie/1')
    },
    goback() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    goback2() {
      this.$router.go(-1)
    }
  },
  name: 'App',
  created() {
    window.onhashchange = () => {
      console.log('213')
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
