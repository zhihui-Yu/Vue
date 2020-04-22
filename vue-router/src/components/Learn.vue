<template>
    <div>
      Learn router --
      <router-link to="/learn/base" tag="button"> base</router-link>
      <!--<router-link to="/learn/http" tag="button"> http</router-link>-->
      <!--也可以用name指明跳转-->
      <router-link :to="{name:'http',params:{id:hellomsg} }" tag="button"> http</router-link>

      <button @click="goHello">go-hello</button>
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Learn",
        data(){
          return {
              hellomsg:'hello msg'
          }
        },
        methods:{
            goHello(){
                //去hello  相当于将地址压入堆栈
                // this.$router.push("/hello")
                //去hello  但是不将地址压栈
                // this.$router.replace("/hello")
                //跳到前面三个页面
                this.$router.go(-3)
                console.log(this.$route.path)
            }
        }
    }
</script>

<style scoped>
/*router-link-exact-active 是精准匹配  点击谁 谁才有这个属性*/
  .active {
    color : red;
  }
</style>
