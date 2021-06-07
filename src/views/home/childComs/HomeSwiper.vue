<template>
  <div id="h_swiper">
    <swiper v-for="item in banners">
          <swiper-item>
            <a :href="item.link" class="swiper_a" @load="imgLoad">
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
  },
  data(){
    return {
      isLoad:false
    }
  },
  methods:{
       imgLoad(){
        if(!this.isLoad){
           this.$emit('imgLoadItem')
           this.isLoad=true
        }
    }
  }




 }



</script>
<style scoped>









</style>
