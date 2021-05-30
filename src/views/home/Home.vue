<template>
    <div id="home">
      <nav-bar class="nav_conter"><div slot="conter">购物街</div></nav-bar>
      <home-swiper :banners=banners></home-swiper>
      <home-recommed :recommend=recommend></home-recommed>
      <feature></feature>
      <tab-control class="tab_control" :title="['流行','新款','精选']" @tabContClick='tabContClick'></tab-control>
      <goods-list :goods="goods['pops'].list"></goods-list>
    </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import HomeSwiper from './childComs/HomeSwiper'
import HomeRecommed from './childComs/HomeRecommed'
import Feature from './childComs/Feature'
import GoodsList from '../../components/content/goosList/GoodsList'

import {getHomeContent,getHomeGoods,getGoodsList,getGoodsNew,getGoodsSell} from '../../network/home'

import TabControl from '../../components/content/tabControl/TabControl'


export default{
 name:'Home',
 components:{
   NavBar,
   HomeSwiper,
   HomeRecommed,
   Feature,
   TabControl,
   GoodsList




 },
 data(){
    return {
      banners:[],
      recommend:[],
      goods:{
        'pops':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      curryIndex:0
     }
 },
 created(){
      this.getHomeContent()
      // this.getHomeGoods()
      this.getGoodsList('pops')
      // this.getGoodsNew('new')
      // this.getGoodsSell('sell')


 },
 methods:{
  getHomeContent(){
     getHomeContent().then(res=>{
            console.log(res)
            this.banners=res.data.banner.list;
            this.recommend=res.data.recommend.list
             })
  },
  //  getHomeGoods(type){
  //         const page=this.goods[type].page+1
  //         getHomeGoods(type,page).then(res=>{
  //        console.log(res)
  //        this.goods[type].list.push()
  //        this.goods[type].page+=1
  //             })

  //       },
   getGoodsList(){
     getGoodsList().then(res=>{
       this.goods['pops'].list.push(...res.data.banner.list)
   })
   }
  //  ,
  //  getGoodsNew(){
  //    getGoodsNew().then(res=>{
  //      this.goods['new'].list.push(...res.data.banner.list)
  //    })
  //  },
  //  getGoodsSell(){
  //    getGoodsSell().then(res=>{
  //      this.goods['sell'].list.push(...res.data.banner.list)
  //  })
  //  }




  //  事件监听方法

   ,tabContClick(index){
     console.log(index)
     switch(index){
       case 0:
       this.curryIndex='pops'
       break
       case 1:
        this.curryIndex='new'
       break
       case 2:
        this.curryIndex='sell'
       break
     }
   }




   }











}


</script>
<style>
@import '../../assets/css/base.css';

#home {
  padding-top:44px
}



.nav_conter{
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  color: #fff;
  background-color:#ff8198;
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);

}

.tab_control {
  position:sticky;
  top: 44px;
  background-color: #eee;
  z-index: 9;
}


</style>
