import {request} from './request'


export function getHomeContent(){
        return request({
            url:'/home/multidata'
          })


}
