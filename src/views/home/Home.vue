<template>
    <div id="home">
      <nav-bar class="nav_conter"><div slot="conter">购物街</div></nav-bar>
        <swiper v-for="(item,index) in banners" :key="index">
           <img :src="item.image923" alt="">
        </swiper>

    </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import {getHomeContent} from '../../network/home'
import {Swiper,SwiperItem} from '../../components/common/swiper/index'
export default{
 name:'Home',
 components:{
   NavBar,
   Swiper,
   SwiperItem
 },
 data(){
    return {
      banners:[],
      recommend:[]
     }
 },
 created(){
    getHomeContent().then(res=>{
      console.log(res)
      this.banners=res.data.banner.list;
      this.recommend=res.data.recommend.list
    })
 },
 methods:{


 }










}


</script>
<style>
@import '../../assets/css/base.css';

.nav_conter{
  text-align: center;
  color: #fff;
  background-color:#ff8198;
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);
}




</style>
