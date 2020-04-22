<template>
  <div>
    父组件
    <!--给子组件传递参数  参数名=“参数值”-->
    <!--接收参数 @传递的函数名=“自定义接收方法”在methods中写一个方法-->
    <Children @childMsg="getMsg" parent="parent" nick="niknik" :age="age" title="title"/>

    {{ childMsg }}
  </div>
</template>

<script>

    import Children from "./Children";

    export default {
        name: "Parent.vue",
        data(){
            return {
                childMsg:'',
                age:30
            }
        },
        components:{
           Children
        },
        methods:{
            getMsg(data){
                this.childMsg = data
            }
        }
    }
</script>

<style scoped>

</style>
