<template>
  <div>
      音乐实例
    <p class="p1" ref="p1">原生P标签</p>

    <input ref="myinput"/>
    <button @click="getvalue">change</button>
  </div>
</template>

<script>
    export default {
        name: "mounted",
        methods:{
          getvalue(){
              console.log(this.$refs.myinput.value)
          }
        },
        data(){
            return{

            }
        },
        mounted() {
            this.$refs.p1.innerHTML="change this"
            this.$refs.myinput.value="hhh"
        }
    }
</script>

<style scoped>

</style>
