<template>
  <div class="tab_control">
     <div v-for="(item,index) in title"
     class="control"
     :class="{active:index===curryIndex}"
     @click="tabClick(index)"
     >
       <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
 export default {
  name:'TabControl',
  props:{
    title:Array,
    default(){
      return []
    }
  },
  data(){
    return {
      curryIndex:0
    }
  },
  methods:{
    tabClick(index){
      this.curryIndex=index
      this.$emit('tabContClick',index)
    }
  }



 }
</script>
<style scoped>
  .tab_control{
    display: flex;
    text-align: center;
    font-size: 14px;
  }

   .control{
     flex: 1;
     height: 40px;
     line-height: 40px;


   }

  .active {
    color:deeppink;

  }

  .control span {
    padding: 4px;
  }
  .active span{
      border-bottom: 2px solid #f1f;

  }
</style>
