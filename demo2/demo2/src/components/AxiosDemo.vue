<template>
    <div>
        hello
    </div>
</template>
<!--
  Axios 网络请求  需要安装插件
  npm install axios --save

-->
<script>
    //import qs from "qs";//解决post参数格式问题
    export default {
        name: "AxiosDemo",
        mounted() {
            //get方法
            // this.$axios.get("https://www.kancloud.cn/yunye/axios/234845/user?ID=12345")
            /*this.$axios.get("https://www.kancloud.cn/yunye/axios/234845/user",{
                params:{
                  ID:12345
                }
            })
                .then(res => {
                    console.log(res.data);
                })
                .catch(error =>{
                    console.log(error)
                })*/
            // post方法
            /*this.$axios.post("https://www.kancloud.cn/yunye/axios/234845/user",{
                firstName: 'Fred',
                lastName: 'Flintstone'
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error)
            });*/
            var url = this.HOST + "/dae/fundin/piwik.js";
            this.$axios({
                method:"get",
                url:url
            })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>

</style>
