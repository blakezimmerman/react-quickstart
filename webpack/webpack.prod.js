const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { APP_DIR, BUILD_DIR, commonConfig } = require('./webpack.common.js');
const compressionPlugin = require('compression-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',

  entry: [
    APP_DIR + '/index.tsx'
  ],

  output: {
    path: BUILD_DIR,
    filename: 'app.[hash].bundle.js'
  },

  plugins: [
    new compressionPlugin()
  ]
});
