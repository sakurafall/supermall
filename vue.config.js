
module.exports = {
  // 配置文件别名和文件后缀省略
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // 配置postcss-px2rem
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
          // remUnit 取设计稿的1/10 ，如设计稿是375 则设置为37.5 设计稿为750 设置为75
            remUnit: 37.5
          })
        ]
      }
    }
  },
}