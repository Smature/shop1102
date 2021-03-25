import axios from 'axios'
import qs from 'qs'
import {Toast} from 'vant'

const baseUrl = "/api";

// 设置请求头
axios.interceptors.request.use(config=>{
  console.group("本次请求地址为:"+config.url)
  // 设置请求头
  const user = JSON.parse(sessionStorage.getItem('user'))
  if(user){
    // 设置请求头
    config.headers.authorization = user.token;
  }
  return config
})

// 设置响应拦截
axios.interceptors.response.use(res=>{
    console.group('本次响应路径为:'+res.config.url)
    if(res.data.code !== 200){
      Toast.fail(res.data.msg);
      return;
    }
    console.log(res);
    return res;
  })

  export const getBanner = ()=>{
    return axios({
      method:'get',
      url:baseUrl+'/api/getbanner',
    })
  }
  
  export const getIndexGoods = ()=>{
    return axios({
      method:'get',
      url:baseUrl+'/api/getindexgoods'
    })
  }

  export const getCate = ()=>{
    return axios ({
      method:'get',
      url:baseUrl + '/api/getcatetree'
    })
  }

  export const getGoodsList = (params)=>{
    return axios({
      method:'get',
      url:baseUrl+'/api/getgoods',
      params,
    })
  }

  // 会员注册
export const register = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/register',
    data:qs.stringify(data)
  })
}

//登录
export const login = (data)=>{
  return axios ({
    method:'post',
    url:baseUrl+'/api/login',
    data:qs.stringify(data)
  })
}


// 获取购物车
export const getCart = (params)=>{
  return axios({
    method:'get',
    url:baseUrl+'/api/cartlist',
    params,
  })
}

// 添加购物车
export const addCart = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/cartadd',
    data:qs.stringify(data)
  })
}

// 删除购物车
export const delCart = (data)=>{
  return axios({
    method:'post',
    url:baseUrl+'/api/cartdelete',
    data:qs.stringify(data)
  })
}
