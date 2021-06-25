<template>
  <div class="bootom-bar">
    <div class="bottom-item bar-left">
      <div>
        <i class="iconfont service">&#xe63f;</i>
        <span>客服</span>
      </div>
       <div>
        <i class="iconfont shop">&#xe632;</i>
        <span>店铺</span>
      </div>
       <div>
        <i class="iconfont sclect">&#xe6ab;</i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>

</template>

<script>
  export default {
    name:'detailBottomBar',
    data(){
      return {

      }
    },
    methods:{
      addToCart(){
        this.$emit('addCart')
      }
    }

  }


</script>
<style scoped>
@import '../../../assets/css/base.css';
  .bootom-bar{
    height: 49px;
    background-color:#fff;
    position: relative;
    bottom: 49px;
    display: flex;
    text-align: center;
  }

  .bottom-item{
    flex: 1;
    display: flex;
  }

  .bottom-item>div{
    flex: 1;
  }
  .bottom-item .iconfont{
    display: block;
    height: 22px;
    width: 22px;
    font-size:20px;
    margin:4px auto 2px
  }
 .bar-right{
   text-align: center;
 }
 .bar-right .cart{
   background-color: #ffe817;
   text-align: center;
   line-height: 49px;
 }
 .bar-right .buy{
   background-color: #f69;
   text-align: center;
   line-height: 49px;
 }
 .bottom-item span{
   font-size: 14px;
 }
</style>
