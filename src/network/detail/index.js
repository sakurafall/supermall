import request from "network/request"

/**
 * 获取商品详情页数据
 * @param {object} params 商品iid
 * @returns 
 */
function getDetail(params) {
  return request({
    url: '/detail',
    params
  })
}

/**
 * 获取详情页商品推荐数据
 * @returns 
 */
function getRecommend() {
  return request({
    url: '/recommend',
  })
}

export {
  getDetail,
  getRecommend
}

// 详情页商品信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 详情页店家信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo,
    this.name = shopInfo.name,
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells,
    this.goodsCoundt = shopInfo.cGoods,
    this.score = shopInfo.score
  }
}

// 商品参数信息
export class Param {
  constructor(info, rule) {
    // 注: images某些商品可能没有值
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}