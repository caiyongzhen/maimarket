<template>
  <div id="detail">
    <detail-navbar class="detail_nav" @detailImgClick='detailClick'></detail-navbar>
    <scroll class="content" ref="scroll" :probe-type='3' @scroll="cententScroll">
      <detail-swiper :top-image="topImage"></detail-swiper>
      <detail-base-info></detail-base-info>
      <detail-shop-info></detail-shop-info>
    </scroll>
    <detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavbar from './childDetail/DetailNavbar.vue'
import DetailSwiper from './childDetail/DetailSwiper.vue'
import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
import DetailShopInfo from './childDetail/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import detailBottomBar from './childDetail/detailBottomBar.vue'
export default {
  name:'Detail',
  components:{
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    detailBottomBar,
    Scroll
  },
  data(){
     return {
       id:null,
       topImage:[
                 {id:1,img:'../../assets/img/recommon/04.png'}

                 ],
       themeTopYs:[0,500,600,1000],
       goodsInfo:{title:'你好',price:22}


     }
  },
  created(){
    this.id=this.$route.params.id


     },
     methods:{
       detailClick(index){
         console.log(index)
         this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
       },
       cententScroll(position){
         console.log(position)
       },
       addToCart(){
         console.log('加入购物车了')
         const product={}
         product.image=this.topImage[0];
         product.title=this.goodsInfo.title;
         product.price=this.goodsInfo.price;
         product.id=this.id
         this.$store.commit('addCart',product)
       }


     }










}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 21;
  background-color: #fff;
  height: 100vh;
}
.detail_nav{
  position: fixed;
  top: 0;
  z-index: 21;
}

.content{
  height: calc(100%-44px);
  background-color: #fff;
}
</style>
