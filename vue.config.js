const container = require("markdown-it-container");
const md = require("markdown-it");
const libConfig = require("./build/webpack.lib.config");
const docsConfig = require("./build/docs.config");
const hljs = require('highlight.js')

const configWebpack = process.env.VUE_APP_LIB_ENV ? libConfig : docsConfig;
md({
  html: true,
});
const { demo, title, table, anchor } = require("./src/config/mdPlugin");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  ...configWebpack,
  parallel: false,
  chainWebpack: (config) => {
    if (process.env.VUE_APP_LIB_ENV) {
      config.entryPoints.delete("app");
      // 组件是独立打包，不需要抽离每个组件公共js
      // config.optimization.delete('splitChunks')
      // 只打包组件，不生成html
      // config.optimization.delete("html");

      // config.plugins.delete('preload')
      // config.plugins.delete('prefetch')
      // config.plugins.delete('hmr')
      // 不要复制public中的内容到lib目录下
      config.plugins.delete("copy");
      // packages 目录需要加入编译
      config.module.rule("js").include.add("/package/components").end();
    }
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("dingyongya-vue-markdown-loader")
      .loader("dingyongya-vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
        preventExtract: true,
        script: true,
        wrapper: "div",
        className: "markdown",
        highlight: function(str) {
          return hljs.highlightAuto(str).value;
        },
        use: [
          [container, "tip"],
          [container, "warning"],
          [container, "danger"],
          [container, "details"],
          [container, "demo", demo],
          [container, "title", title],
          [container, "table", table],
          [container, "anchor", anchor],
        ],
      });
  },
};
