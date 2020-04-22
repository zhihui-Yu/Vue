<template>
  <div>
    父组件传来的值：{{ title.name }}
    <input v-model="msg">
    <button @click="sendMsg" type="button">传递数据</button>
  </div>
</template>

<script>
    export default {
        name: "Learn.vue",
        methods:{
          sendMsg(){
              /*
              * 第一个参数：父组件接收时调用的方法
              * 第二个数传递过去的数据
              * */
              this.$emit("getMsg",this.msg)
          }
        },
        data(){
            return {
                msg:''
            }
        },
        props:["title"]
    }
</script>

<!--添加scoped 说明该css只适用于当前文件-->
<style scoped>

</style>
