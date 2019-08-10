const defaultConfig = require('./webpack.config')
const pkg = require('../package.json')
const TARGET = pkg.assetPath
const proxyHost = 'http://localhost:3000'

module.exports = {
  ...defaultConfig,
  
  devServer:{
    contentBase: TARGET,
    proxy: [{
      context: ['/api', '/login', '/login-done', '/logout'],
      target: 'http://localhost:3000'
    }],
    open: true,
    historyApiFallback: true,
    publicPath: '/'
  },
}

