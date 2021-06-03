<template>
  <div class="goods_list">
     <goods-item v-for="item in goods" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
 export default {
  components: { GoodsItem },
   name:'GoodsList',
   props:{
     good:{
       type:Array,
       default(){
         return []
       }
     }
   },
   data(){
     return {
       goods:[
         {acm:'1收藏',like:'5个喜欢',title:'换季女装',img:'../../../assets/img/recommon/03.png'},
         {acm:'2收藏',like:'6个喜欢',title:'换季1装',img:'../../../assets/img/recommon/05.png'},
         {acm:'3收藏',like:'7个喜欢',title:'换季2装',img:'../../../assets/img/recommon/07.png'},
         {acm:'4收藏',like:'8个喜欢',title:'换季3装',img:'../../../assets/img/recommon/11.png'},
         {acm:'5收藏',like:'9个喜欢',title:'换季4装',img:'../../../assets/img/recommon/13.png'},
         {acm:'6收藏',like:'10个喜欢',title:'换季5装',img:'../../../assets/img/recommon/15.png'},
         {acm:'7收藏',like:'11个喜欢',title:'换季6装',img:'../../../assets/img/recommon/17.png'},
         {acm:'8收藏',like:'12个喜欢',title:'换季7装',img:'../../../assets/img/recommon/03.png'}
       ]
     }
   }





 }




</script>
<style scoped>
 /* .goods_list {
    display: flex;
    padding-bottom: 10px;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2px;
    width: 48%;
  }


  .goods_item{
    width: 100%;

  } */




</style>
