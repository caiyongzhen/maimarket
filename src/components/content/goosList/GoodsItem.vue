<template>
  <div class="goods_item" @click="itemClick">
     <img :src="goodsItem.img" alt="你好" @load="loadmore">
     <div class="goods_info">
       <p>{{goodsItem.title}}</p>
       <span class="goods_acm">{{goodsItem.like}}</span>
       <span class="goods_like">{{goodsItem.acm}}</span>
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
   },
   methods:{
     loadmore(){
       console.log(loadmore)
       this.$bus.$emit('Itemloadmore')
     },
     itemClick(){
       console.log('---')
       this.$router.push('/detail/'+111)



     }




   }




 }




</script>
<style scoped>
  .goods_item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 10px;
    position: relative;
    padding: 2px;
    width: 50%;
  }


  .goods_item img {
    width: 100%;
    height: 150px;
    border-radius: 5px;

  }

  .goods_info {
    position: absolute;
    left: 0;
    bottom: 2px;
    font-size: 12px;
    text-align: center;
    overflow: hidden;

  }
  .goods_info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;


  }



</style>
