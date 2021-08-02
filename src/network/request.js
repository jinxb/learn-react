import axios from 'axios'

import {BASE_URL,TIMEOUT} from './config';    

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 全局统一请求拦截
instance.interceptors.request.use(config=>{
  // 1.发送网络请求时，在界面的中间位置显示loading组件

  // 2.某一些请求要求用户必须携带token,如果没有携带，直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
},err => {

});

export default instance