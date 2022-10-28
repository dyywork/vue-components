const path = require('path')
const container = require('markdown-it-container');
const md = require('markdown-it');
const WebpackBar = require('webpackbar')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

md({
    html: true
})

const {demo, title, table, anchor} = require('./src/config/mdPlugin')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        plugins: [
            new WebpackBar(),
            // new BundleAnalyzerPlugin(
            //     {
            //         openAnalyzer: false,
            //         analyzerMode:'server', // 可以是 server、static、json、disabled。在server模式下，分析器将启动HTTP服务器来显示软件包报告。在“静态”模式下，会生成带有报告的单个HTML文件。在disabled模式下，你可以使用这个插件来将generateStatsFile设置为true来生成Webpack Stats JSON文件。
            //         analyzerHost: '127.0.0.1', // 将在“服务器”模式下使用的端口启动HTTP服务器
            //         analyzerPort: 9527
            //     })
        ],
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
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            css: {
                // 注意：以下配置在 Vue CLI v4 与 v3 之间存在差异。
                // Vue CLI v3 用户可参考 css-loader v1 文档
                // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
                modules: {
                    localIdentName: 'style/[name]'
                },
            }
        }
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