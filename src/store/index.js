import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)





const store=new Vuex.Store({

      state:{
       goodsList:[]
      },
      mutations:{
        addCart(state,payload){
          state.goodsList.push(payload)
        }
      },





})


export default store
