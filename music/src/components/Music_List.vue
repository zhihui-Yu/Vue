<template>
    <div class="board panel">
      <div class="panel hotsongs on">
        <ul class="list">
          <router-link tag="li" :to="{name : 'musicplay',params:{songid:item.song_id}}" class="song url" v-for="(item,index) in currentData" :key="index">
            <div class="poster">
              <img :src="item.pic_big" :alt="item.title">
            </div>
            <div class="info">
              <div class="name">
                {{ item.title}}
              </div>
              <div  class="author">
                {{ item.artist_name }}
              </div>
            </div>
          </router-link>
        </ul>
        <router-link :to="{name:'morelist',params:{moreType:this.type,title:this.title}}" tag="div" class="more-songs url">
          查看该榜单&gt;
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Music_List",
        data(){
            return {
                currentData:[]
            }
        },
        props:{
            url:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:'2'
            },
            title:{
                type:String,
                default:"音乐榜"
            }
        },
        mounted() {
            const httpUrl = this.HOST + this.url;
            this.$axios.get(httpUrl)
                .then(res => {
                    this.currentData = res.data.song_list
                    console.log(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
</script>

<style scoped>

  .board{
    margin-bottom: 10px;
  }

  .panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
  }

  .list{
    padding: 20px;
    padding-top: 0;
  }

  .panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
  }

  .panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
  }

  .panel .list li .poster img {
    border: 1px solid #eee;
  }
  .info{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
  }

  .info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
  }

  .more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
</style>
