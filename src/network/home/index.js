import request from "network/requset"

function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export {
  getHomeMultidata
}