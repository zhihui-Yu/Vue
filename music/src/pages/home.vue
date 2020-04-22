<template>
    <div>
      <today_-recommend title="今日榜单" type="1"/>
      <News_Music title="新歌速递" type="2"/>
      <Swiper_Banner/>
      <music_listnav/>
      <keep-alive>
          <router-view />
      </keep-alive>
      <today_-recommend title="热门歌单" type="24"/>
    </div>
</template>

<script>
  import Today_Recommend from "../components/Today_Recommend";
  import News_Music from "../components/News_Music";
  import Swiper_Banner from "../components/Swiper_Banner";
  import music_listnav from "./musiclist/music_listnav";

    export default {
        name: "home",
        components:{
            Today_Recommend,
            News_Music,
            Swiper_Banner,
            music_listnav
        }
    }
</script>

<style scoped>

  .mod-albums {
    background-color: #fff;
    padding: 10px 17px;
  }

  .hd {
    display: flex;
    margin: 14px 0 18px 0;
  }

  .hd h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }

  .hd div {
    width: 64px;
    font-size: 12px;
    text-align: right;
  }

  .mod-albums .gallery {
    overflow: hidden;
    margin: 0 -5px;
  }

  .mod-albums .gallery .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
  }

  .mod-albums .gallery .card .album {
    position: relative;
  }

  .mod-albums .gallery .card img {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
  }

  .mod-albums .gallery .card .name {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
  }

</style>
