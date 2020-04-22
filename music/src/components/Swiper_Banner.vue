<template>
  <div class="banner">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img src="../assets/img/b1.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/b2.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/b3.jpg" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "Swiper_Banner",
        data(){
            return {
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        components: {
            Swiper,
            SwiperSlide
        }
    }
</script>

<style scoped>
.banner {
  padding: 10px;
}
</style>
