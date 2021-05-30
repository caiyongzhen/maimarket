import {request} from './request'


export function getHomeContent(){
        return request({
            url:'/home/multidata'
          })


}


export function getHomeGoods(type,page){
        return request({
          url:'/home/data?',
          parmas:{
            type,
            page
          }
        })

}

export function getGoodsList(){
         return request({
           url:'/home/multidata'
         })
}


export function getGoodsNew(){
        return request({
           url:'/home/multidata'
        })
}



export function getGoodsSell(){
        return request({
          url:'/home/multidata'
        })
}
