<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <!--tag 指定渲染 to跳转的路由-->
      <router-link tag="li" to="/hello">hello</router-link>
      <router-link to="/learn">learn</router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*router-link-exact-active 是精准匹配  点击谁 谁才有这个属性*/
/* 在路由上可以配置 ---index.js文件*/
.active {
  color : red;
}
  .currentActive{
    border: 1px solid black;
  }
</style>
