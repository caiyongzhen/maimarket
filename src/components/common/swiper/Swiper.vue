<template>
  <div id="swiper">
     <div class="swiper_item">
        <slot></slot>
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

<style scoped>
   #swiper{
     position: absolute;
   }
  .swiper_item{
     float: left;
     width: 200px;
     height: 200px;

  }
</style>
