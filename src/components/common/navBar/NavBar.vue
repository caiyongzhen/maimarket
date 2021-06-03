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
<style scoped>
  .nav_bar {
     width: 100%;
     display: flex;
     height:44px;
     line-height: 44px;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 8;
     text-align: center;
      color: #fff;
      background-color:#ff8198;
      box-shadow: 0 -1px 1px rgba(100,100,100,.1);


  }

  .conter {
    flex: 1;
  }

.left,.rigth {
  width: 60px;
}




</style>
