<template>
  <div>
    <p>{{ money|rmb }}</p>
    <p>{{ txt | author }}</p>
  </div>
</template>

<script>
    export default {
        name: "FilterDemo.vue",
        data(){
            return {
                msg:"hello",
                money : 20,
                txt : "背影"
            }
        },
        filters: {
            rmb : function (value) {
                if(value) {
                    value = value.toString()
                    return "￥"+value;
                }
            },
            author : function (value) {
                if(value) {
                   // value = value.toString()
                    return value + "   --- 朱自清"
                }
            }
        }
    }
</script>

<style scoped>

</style>
