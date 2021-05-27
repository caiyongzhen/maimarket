<template>
  <div class="recommed">
    <div v-for="item in recommend" class="recommed_item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeRecommed',
  props:{
     recommend:{
       tpye:Array,
       default(){
         return []
       }
     }
  }
}






</script>

<style scoped>

 .recommed{
   display: flex;
   text-align: center;
   margin-top: 4px;
 }

 .recommed_item{
   flex:1;

 }
 .recommed_item img{
   width: 70px;
   height: 70px;
 }

</style>
