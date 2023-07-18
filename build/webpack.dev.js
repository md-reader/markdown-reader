const { merge } = require('webpack-merge')
// const ExtReloader = require('webpack-ext-reloader')
const commentConfig = require('./webpack.common.js')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = merge(commentConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: ['**/node_modules'],
  },
  plugins: [new HotModuleReplacementPlugin()],
})
