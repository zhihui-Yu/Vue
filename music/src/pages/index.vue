<template>
    <div class="index">
      <ul>
        <router-link tag="li" to="/home">
          <img src="../assets/logo-ea5.png" alt="">
        </router-link>
        <router-link tag="li" to="/artists">
          歌手
        </router-link>
        <router-link tag="li" to="/listcate">
          榜单
        </router-link>
        <router-link tag="li" to="/ucenter">
          我的
        </router-link>
        <router-link tag="li"  to="/search">
          搜索
        </router-link>
      </ul>
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped>
  .index img{
    width: 26px;
    height: 26px;
  }

  .index ul{
    display: flex;
    height: 50px;
    line-height: 50px;
    background: #f9f9f9;
  }

  .index ul li {
    flex: 1;
    text-align: center;
  }

  .index ul li a{
    font-size: 16px;
    color: #999;
  }

</style>
