<template>
  <div>
    <nav-bar class="nbr-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/backtop/back.png" alt="">
      </div>
      <div slot="conter" class="detail">
        <div v-for="(item,index) in title"
        class="detail_item"
        :class="{active:index===curryIndex}" @click="deatilClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navBar/NavBar.vue'
export default {
  name:'DetailNavbar',
  components:{
      NavBar
  },
  data(){
    return {
      title:['商品','参数','评论','推荐'],
      curryIndex:0,
      id:null
    }
  },
  methods:{
    deatilClick(index){
      this.curryIndex=index
      this.$emit('detailImgClick',index)
    },
    backClick(){
      this.$router.back()
    }

  }








}

</script>

<style scoped>

  .detail{
    display: flex;
  }


.detail_item{
  flex: 1;
  font-size: 13px;
}
.active{
  color:deeppink
}

.back img {
  margin-top: 12px;
  width: 12px;
}



</style>
