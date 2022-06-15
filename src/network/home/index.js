import request from "network/request"

// 首页大多数据
function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}


/**
 * 首页商品数据
 * 参数: type, page
 * 请求类型: get
**/
function getHomeGoods(params) {
  return request({
    url: 'home/data',
    params
  })
}

export {
  getHomeMultidata,
  getHomeGoods
}