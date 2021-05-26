<template>
  <div class="nav_bar">
     <div class="left"><slot name="left"></slot></div>
     <div class="conter"><slot name="conter"></slot></div>
     <div class="rigth"><slot name="rigth"></slot></div>
  </div>
</template>
<script>
export default {
  name:'NavBar'



}







</script>
<style>
  .nav_bar {
     display: flex;
     height:44px;
     line-height: 44px;


  }

  .conter {
    flex: 1;
  }

.left,.rigth {
  width: 60px;
}




</style>
