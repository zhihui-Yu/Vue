<template>
<div>
  组件A：{{change}}
  <button type="button" @click="changeContent">改变</button>

</div>
</template>

<script>
    export default {
        name: "A.vue",
        methods:{
            changeContent(){
                this.change = "改变"
            }
        },
        data(){
            return{
                change:'默认'
            }
        }
    }
</script>

<style scoped>

</style>
