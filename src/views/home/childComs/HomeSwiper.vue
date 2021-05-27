<template>
  <div id="h_swiper">
    <swiper v-for="item in banners">
          <swiper-item slot="img">
            <a :href="item.link" class="swiper_a">
              <img :src="item.image" alt="">
            </a>
          </swiper-item>
        </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
 export default{
   name:'HomeSwiper',
  //  props:{
  //    banners:Array,
  //    default(){
  //      return []
  //    }
  //  },
  props:['banners'],
  components:{
    Swiper,
    SwiperItem
  }




 }



</script>
<style>

</style>
