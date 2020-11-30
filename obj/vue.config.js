'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  devServer: {
    proxy: {
        '/api': {
            // target: "http://10.19.193.135:8870/ssyth",
            // target: 'http://192.168.1.101/HONOR/php/',
            target: 'http://192.168.1.101/obj/',
            changeOrigin: true, // 是否跨域
            pathRewrite: {
                '^/api': ''
            }
        },
    },
},
}
