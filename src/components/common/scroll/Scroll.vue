<template>
  <div class="wrapper" ref="wrapper">
     <div class="contain">
        <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
     probeType:{
     type:Number,
     default:0
  },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      scroll:null
    }
  },


  mounted(){
     this.scroll=new BScroll(this.$refs.wrapper,{
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.pullUpLoad
     });
     this.scroll.on('scroll',(position)=>{
           this.$emit('scroll',position)
     });
     if(this.pullUpLoad){
       this.scroll.on('pullingUp',()=>{
           this.$emit('pullingUp')
     })
     }
    //  console.log(this.scroll)
  },
  methods:{
     scrollTo(x,y,time=500){
      this.scroll&&this.scroll.scrollTo()&&this.scroll.scrollTo(x,y,time)
     },
     finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
     },
     refresh(){
      this.scroll&&this.scroll.refresh()
     },
     getScrollY(){
       return this.scroll? this.scroll.y:0
     }




  }






}


</script>
<style scoped>






</style>
