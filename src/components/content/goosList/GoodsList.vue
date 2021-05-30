<template>
  <div class="goods_list">
     <goods-item v-for="item in goods" :goodsItem="item" class="goods_item"></goods-item>

  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
 export default {
  components: { GoodsItem },
   name:'GoodsList',
   props:{
     goods:{
       type:Array,
       default(){
         return []
       }
     }
   }





 }




</script>
<style scoped>
  .goods_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }


  .goods_item{
    width: 48%;

  }




</style>
