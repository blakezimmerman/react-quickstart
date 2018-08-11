const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const { APP_DIR, commonConfig } = require("./webpack.common.js");

module.exports = webpackMerge(commonConfig, {
  mode: "development",

  entry: ["webpack-hot-middleware/client", APP_DIR + "/index.tsx"],

  output: {
    filename: "app.bundle.js",
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
});
