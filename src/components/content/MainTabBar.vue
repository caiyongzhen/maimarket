<template>
     <div>
         <tab-bar>
      <tab-bar-item path="/home" activeColor='red'>
        <img  slot='img-icon' src="../../assets/img/tabbar/icon_home@3x.png" alt="">
        <img  slot='img-active' src="../../assets/img/tabbar/icon_home_active@3x.png" alt="">
        <div slot="img-txt">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor='red'>
        <img  slot='img-icon' src="../../assets/img/tabbar/icon_category@3x.png" alt="">
        <img  slot='img-active' src="../../assets/img/tabbar/icon_category_active@3x.png" alt="">
        <div slot="img-txt">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor='red'>
        <img  slot='img-icon' src="../../assets/img/tabbar/icon_cart@3x.png" alt="">
        <img  slot='img-active' src="../../assets/img/tabbar/icon_cart_active@3x.png" alt="">
        <div slot="img-txt">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor='red'>
        <img  slot='img-icon' src="../../assets/img/tabbar/icon_me@3x.png" alt="">
        <img  slot='img-active' src="../../assets/img/tabbar/icon_me_active@3x.png" alt="">
        <div slot="img-txt">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from '../../components/common/tabBar/TabBar'
import TabBarItem from '../../components/common/tabBar/TabBarItem'

    export default {
        name:'MainTabBar',
        components:{
            TabBar,
            TabBarItem
        }








    }
</script>
<style>







</style>
