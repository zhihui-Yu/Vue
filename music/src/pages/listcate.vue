<template>
    <div>
      <listcate_list v-for="(item,index) in musicTypeJson" :musicType="item" :key="index" />
    </div>
</template>

<script>
  import listcate_list from "../components/listcate_list";
  import MusicType from "../assets/data/musictype.json"

    export default {
        name: "listcate",
        data(){
            return {
              musicTypeJson : []
            }
        },
        components:{
            listcate_list
        },
        created() {
            this.musicTypeJson = MusicType.currentType
        }
    }
</script>

<style scoped>

</style>
