<template>
  <div class="detailInfo">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.columns[2]}}</span>
    </div>
    <div class="line-info"></div>
  </div>
</template>
<script>
export default{
  name:'DetailBaseInfo',
  data(){
    return {
      goods:{
        title:'【仲佰美】2018春秋季新款原宿风长袖T桖女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底',
        oldPrice:'￥199',
        newPrice:'￥38.5',
        discount:'活动价',
        columns:["销量 1580","收藏33人","默认快递"]

      }
    }
  }
}




</script>
<style scoped>
 .detailInfo{
   margin-top: 4px;
    padding: 6px;
 }
 .info-title{
   font-size: 18px;
   white-space: pre-wrap;
   word-wrap: break-word;
 }

.n-price {
   font-size: 25px;
   color:deeppink
}
.o-price{
  font-size: 16px;
  text-decoration: line-through;
  padding: 0 4px;
}
.info-price{
  position: relative;
  margin-top: 10px;
}
.discount{
  color: #fff;
  background-color: deeppink;
  border-radius: 8px;
  font-size: 12px;
  padding: 1px 4px;
  position: absolute;
  top: -2px;
  left: 130px;
}
.info-other{
  display: flex;
  text-align: center;
  font-size: 14px;
  margin-top: 16px;

}
span{
  flex: 1;
}
.line-info{
  height: 6px;
  background-color: #E6E6FA;
  margin-top: 20px;
}
</style>
