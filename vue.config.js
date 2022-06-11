const path = require('path')
const container = require('markdown-it-container');
const md = require('markdown-it');
const WebpackBar = require('webpackbar')

md({
    html: true
})

const {demo, title, table, anchor} = require('./src/config/mdPlugin')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        plugins: [new WebpackBar()],
        resolve: {
            alias: {
              "@docs":  path.join(__dirname, 'package/docs'),
              "@src":  path.join(__dirname, 'src'),
           }
       }
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'DUI',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    parallel: false,
    chainWebpack: config => {
        config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('dingyongya-vue-markdown-loader')
            .loader('dingyongya-vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                preventExtract: true,
                script: true,
                wrapper: 'div',
                className: 'markdown',
                use: [
                    [container, 'tip'],
                    [container, 'warning'],
                    [container, 'danger'],
                    [container, 'details'],
                    [container, 'demo', demo],
                    [container, 'title', title],
                    [container, 'table', table],
                    [container, 'anchor', anchor],
                ],
            })
    },
}