<template>
  <div class="shop">
     <div class="shop_use">
       <img src="../../../assets/img/user/tou3.png" alt="">
       <span>hw旗舰店</span>
     </div>
     <div class="shop_info">
       <div>
         <div>
           <span>{{shop.shopInfo[0].cSells|sellCountFilter}}万</span>
           <div>总销量</div>
         </div>
         <div>
           <span>{{shop.shopInfo[1].cGoods}}</span>
           <div>全部宝贝</div>
         </div>
       </div>
       <div>
         <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td>{{item.score}}</td>
            <td :class="{better:item.isBetter}" class="shhop_score"><span>{{item.score>=5?'高':'底'}}</span></td>
          </tr>
         </table>
       </div>
     </div>
     <ul>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
    <li>你好</li>
  </ul>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  data(){
    return {
      shop:{
        shopInfo:[{cSells:57879},{cGoods:99}],
        score:[
          {name:'描述相符',score:4.46,isBetter:false},
          {name:'价格合理',score:5,isBetter:true},
          {name:'质量满意',score:4.62,isBetter:false}
        ]
      }
    }
  },
  filters:{
    sellCountFilter(value){
        let requse=value;
        if(value>10000){
         requse=(requse/10000).toFixed(1)
        }
        return requse
    }
  }


}



</script>
<style scoped>
 .shop_use{
   padding: 8px;
   margin-top: 12px;
   position:relative
 }
  .shop_use img{
    width: 50px;
    height: 50px;
  }
  .shop_use span {
    font-size: 18px;
    margin-left: 18px;
    position: absolute;
    top: 25px;
    left: 52px;
  }
  .better span{
    background-color: green;
  }
  .shhop_score span{
    background-color: red;
    color: #fff;
    text-align: center;
  }
</style>
