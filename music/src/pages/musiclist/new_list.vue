<template>
    <div>
      <Music_List :url ='url' :title="this.$route.params.title" :type="this.$route.params.type"/>
    </div>
</template>

<script>
    import Music_List from "../../components/Music_List";
    export default {
        name: "new_list",
        components:{
            Music_List
        },
        data(){
            return {
                url : "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0"
            }
        }
    }
</script>

<style scoped>

</style>
