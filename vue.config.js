const isProduction=process.env.NODE_ENV!=='development';

module.exports={
  // 代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    extract: !!isProduction,
    sourceMap: false,
    loaderOptions: {
      //   scss: {
      //     prependData: '@import "~@/assets/scss/index.scss";'
      //   },
      // rem全局匹配
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 50,
            exclude: /(node_module)/,
            mediaQuery: false,
            minPixelValue: 3
          })
        ]
      }
    }
  }
}
