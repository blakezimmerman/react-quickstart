const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

exports.APP_DIR = path.resolve(__dirname, '../src/client');
exports.BUILD_DIR = path.resolve(__dirname, '../dist/client');

exports.commonConfig = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [this.APP_DIR],
        use: 'ts-loader'
      },
      {
        test: /\.(pdf|png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'file-loader?name=assets/[hash].[ext]'
      },
      {
        test: /\.ico$/,
        use: 'file-loader?name=favicon.ico'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:  this.APP_DIR + '/index.handlebars',
      filename: 'index.handlebars',
    })
  ]
};
