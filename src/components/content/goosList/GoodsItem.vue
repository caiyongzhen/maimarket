<template>
  <div class="goods_item">
     <img :src="goodsItem.image" alt="">
     <div class="goods_info">
       <p>{{goodsItem.title}}</p>
       <span class="goods_acm">{{goodsItem.width}}</span>
       <span class="goods_like">{{goodsItem.width923}}</span>
     </div>
  </div>
</template>

<script>
 export default {
   name:'GoodsItem',
   props:{
     goodsItem:{
       type:Object,
       default(){
         return {}
       }
     }
   }




 }




</script>
<style>
  .goods_item {
    padding-bottom: 10px;
    position: relative;
    width: 48%;
  }


  .goods_item img {
    widows: 100%;
    border-radius: 5px;
  }

  .goods_info {
    position: absolute;
    left: 0;
    bottom: 4px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;

  }
  .goods_info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;


  }

  /* .goods_info::after{
    display: block;
    content: "";
    clear: both;
    height: 0;
    visibility: hidden;

  } */

</style>
