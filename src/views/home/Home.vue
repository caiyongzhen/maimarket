<template>
    <div id="home">
      <nav-bar class="nav_conter"><div slot="conter">购物街</div></nav-bar>
      <home-swiper :banners=banners></home-swiper>
      <home-recommed :recommend=recommend></home-recommed>
      <feature></feature>
      <ul>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
        <li>f</li>
      </ul>
    </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import HomeSwiper from './childComs/HomeSwiper'
import HomeRecommed from './childComs/HomeRecommed'
import Feature from './childComs/Feature'

import {getHomeContent} from '../../network/home'


export default{
 name:'Home',
 components:{
   NavBar,
   HomeSwiper,
   HomeRecommed,
   Feature

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

#home {
  padding-top:44px
}



.nav_conter{
  text-align: center;
  color: #fff;
  background-color:#ff8198;
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);

}




</style>
