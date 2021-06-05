<template>
    <div id="home">
      <nav-bar class="nav_conter"><div slot="conter">购物街</div></nav-bar>
      <scroll class="content"
      ref="scroll"
      :probe-type='2'
      :pull-up-load='true'
      @scroll="scrollBtn" @pullingUp="LoadMoar">
        <home-swiper :banners=banners></home-swiper>
        <home-recommed :recommend=recommend></home-recommed>
        <feature></feature>
        <tab-control class="tab_control" ref="tabComtrol" :title="['流行','新款','精选']"></tab-control>
        <goods-list :goods="goods['pops'].list"></goods-list>
      </scroll>

      <back-top @click.native="backClick" v-show="isBackTop"></back-top>
    </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import HomeSwiper from './childComs/HomeSwiper'
import HomeRecommed from './childComs/HomeRecommed'
import Feature from './childComs/Feature'
import GoodsList from '../../components/content/goosList/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'

import {getHomeContent,getHomeGoods,getGoodsList,getGoodsNew,getGoodsSell} from '../../network/home'
import {debounce} from '../../common/utils'

import TabControl from '../../components/content/tabControl/TabControl'
import BackTop from '../../components/content/backtop/BackTop.vue'


export default{
 name:'Home',
 components:{
   NavBar,
   HomeSwiper,
   HomeRecommed,
   Feature,
   TabControl,
   GoodsList,
   Scroll,
   BackTop




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
      curryIndex:0,
      isBackTop:false



     }
 },
 created(){
      this.getHomeContent()
      // this.getHomeGoods()
      this.getGoodsList('pops')
      // this.getGoodsNew('new')
      // this.getGoodsSell('sell')


 },
 mounted(){
     const refresh=debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('Itemloadmore',()=>{
            console.log('----')
            refresh()
      })
    console.log(this.$refs.tabComtrol.$el.offsetTop)

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
   LoadMoar(){
        console.log('下拉加载更多')

     },
   getGoodsList(){
     getGoodsList().then(res=>{
       this.goods['pops'].list.push(...res.data.banner.list)
       this.$refs.scroll.finishPullUp()
   })
   },
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

  //  ,tabContClick(index){
    //  console.log(index)
    //  switch(index){
    //    case 0:
    //    this.curryIndex='pops'
    //    break
    //    case 1:
    //     this.curryIndex='new'
    //    break
    //    case 2:
    //     this.curryIndex='sell'
    //    break
    //  }
  //  }
     backClick(){
       console.log('----')
       this.$refs.scroll.scrollTo(0,0)
     },

     scrollBtn(position){
       console.log(position)
       this.isBackTop=(-position.y)>500
     }



   }











}


</script>
<style scoped>
@import '../../assets/css/base.css';

#home {
  padding-top:44px;
  position: relative;
  height: 100vh;
}



/* .nav_conter{
  position: fixed;
  top: 44px;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  background-color:#ff8198;
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);

} */

.tab_control {
  top: 44px;
  background-color: #eee;
  z-index: 9;
}

.content{
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;

}
</style>
