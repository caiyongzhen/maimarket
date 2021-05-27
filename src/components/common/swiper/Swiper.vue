<template>
  <div id="swiper">
     <div class="swiper_item">
       <slot name="img"></slot>
     </div>
  </div>
</template>

<script>
export default{
  name:'Swiper',
  props:{
    swiper:String
  },
  data(){
    return {

    }
  }












}




</script>

<style>
  #swiper{
     position: relative;



  }
  .swiper_item {
    clear: fixed;
  }



  .swiper_item img{
     position: absolute;
     float: left;
     top: 0;
     left: 0;
     width:100%;
     height: 200px;


       }
</style>
