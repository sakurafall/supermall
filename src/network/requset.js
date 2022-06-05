import axios from "axios";

var host;

// process.env是Nodejs提供的一个API，它返回一个包含用户环境信息的对象。
// 通过NODE_ENV 判断当前环境是生产环境(production)还是开发环境(development) 自动切换不同域名
// 暂时开发环境和生产环境  所以域名暂时一样 
if (process.env.NODE_ENV== "development") {
  //开发环境
  host="http://152.136.185.210:7878/api/hy66"
} else { 
  host="http://152.136.185.210:7878/api/hy66"
}

//实例
var instance = axios.create({
  //基础地址
  baseURL: host,
  timeout: 5*1000
})

//请求拦截器
instance.interceptors.request.use(config => { 
  return config;
}, err => { 
  return Promise.reject(err)
})

//响应拦截器
instance.interceptors.response.use(response => {
  return response.data;
}, err => { 
  return Promise.reject(err)
})

export default instance;