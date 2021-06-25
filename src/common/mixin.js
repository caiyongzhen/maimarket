 import BackTop from '../components/content/backtop/BackTop.vue'





export const backTopMixin={
        components:{
          BackTop
        },
        data(){
          return {
            isShowBackTop:false
          }
        },
        methods:{
          backTop(){
            this.$refs.scroll.scrollTo(0,0,300)
          }
        }



}
