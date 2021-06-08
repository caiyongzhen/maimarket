<template>
  <div>
    <h2>详情页</h2>
  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar.vue'

export default {
  name:'Detail',
  components:{
    NavBar

  },
  data(){
    return {
       id:null
    }
  },
  created(){
    this.id=this.$route.params.id
    console.log(this.id)
  }








}




</script>
<style scoped>


body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%
}


.detail{
  height: 100%
}




</style>
