<template>
  <div id="swiper">
     <div class="swiper_item">
        <slot></slot>
     </div>
  </div>
</template>

<script scoped>
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
    position: fixed;
    overflow: hidden;


  }

  .swiper_item img{
     position: absolute;
     float: left;
     top: 0;
     left: 0;
     width:100%;
     height: 200px;
     padding: 200px 0 200px;


       }
</style>
