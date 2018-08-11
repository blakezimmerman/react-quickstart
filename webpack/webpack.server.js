const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const copyNodeModules = require("copy-node-modules");

const ROOT_DIR = path.resolve(__dirname, "../");
const SERVER_DIR = path.resolve(__dirname, "../src/server");
const DIST_DIR = path.resolve(__dirname, "../dist");
const BUILD_DIR = path.resolve(__dirname, "../dist/server");

copyNodeModules(ROOT_DIR, DIST_DIR, { devDependencies: false }, (err, results) => {
  if (err) console.error(err);
});

// Keep requires intact in bundle
// Read more here: http://jlongster.com/Backend-Apps-with-Webpack--Part-I
let nodeModules = {};
fs.readdirSync("node_modules")
  .filter((x) => [".bin"].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  mode: "production",

  target: "node",

  node: {
    __dirname: false,
  },

  devtool: "sourcemap",

  resolve: {
    extensions: [".js", ".ts"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },

  externals: nodeModules,

  entry: [SERVER_DIR + "/app.ts"],

  output: {
    path: BUILD_DIR,
    filename: "server.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [SERVER_DIR],
        use: "ts-loader",
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
  ],
};
