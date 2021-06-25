<template>
  <div id="detailSwiper">
    <div class="swiper">
       <img src="../../../assets/img/recommon/06.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
   name:'DetailSwiper',
   props:{
      topImage:{
        type:Array,
        default(){
          return []
        }
      }
   },
   data(){
     return {
        // topImage:[
        //   {id:1,img:'../../../assets/img/recommon/06.png'}
        // ]
     }
   }
}

</script>
<style scoped>
.swiper{
  display: flex;

}
.swiper img {
  width: 100%;
  height: 250px;
  margin-top: 45px;
}
</style>
