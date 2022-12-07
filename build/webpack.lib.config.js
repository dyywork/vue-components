const nodeExternals = require("webpack-node-externals");
const path = require("path");
const WebpackBar = require("webpackbar");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  css: {
    extract: {
      filename: "index.css",
    },
  },
  outputDir: "lib",
  configureWebpack: {
    // mode: 'production',
    entry: "./package/components/index.js",
    output: {
      path: path.resolve(process.cwd(), "./lib"),
      filename: "DUI.umd.js",
      libraryExport: "default",
      libraryTarget: "umd",
    },
    plugins: [
      new WebpackBar(),
      new CleanWebpackPlugin({
        dry: false,
        verbose: true,
        protectWebpackAssets: false,
        cleanAfterEveryBuildPatterns: ["index.html", "manifest.json"],
        dangerouslyAllowCleanPatternsOutsideProject: true,
      }),
    ],
    resolve: {
      alias: {
        "@docs": path.join(__dirname, "../package/docs"),
        "@src": path.join(__dirname, "../src"),
      },
    },
    externals: [nodeExternals()],
  },
};
