const path = require("path");
const WebpackBar = require('webpackbar')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    configureWebpack: {
        plugins: [
            new WebpackBar(),
            // process.env.NODE_ENV === 'production' ? new BundleAnalyzerPlugin(
            //     {
            //         openAnalyzer: false,
            //         analyzerMode:'server', // 可以是 server、static、json、disabled。在server模式下，分析器将启动HTTP服务器来显示软件包报告。在“静态”模式下，会生成带有报告的单个HTML文件。在disabled模式下，你可以使用这个插件来将generateStatsFile设置为true来生成Webpack Stats JSON文件。
            //         analyzerHost: 'localhost', // 将在“服务器”模式下使用的端口启动HTTP服务器
            //         analyzerPort: 9527
            //     }) : () => {}
        ],
        resolve: {
            alias: {
                "@docs": path.join(__dirname, '../package/docs'),
                "@src": path.join(__dirname, '../src'),
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vue: {
                        name: 'vue',
                        test: /[\\/]node_modules[\\/]vue[\\/]/,
                        priority: -10
                    },
                    vuex: {
                        name: 'vuex',
                        test: /[\\/]node_modules[\\/]vuex[\\/]/,
                        priority: -10
                    },
                    'vue-router': {
                        name: 'vue-router',
                        test: /[\\/]node_modules[\\/]vue-router[\\/]/,
                        priority: -10
                    },
                    'element-ui': {
                        name: 'element-ui',
                        test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                        priority: -10
                    },
                    'vendors': {
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        priority: -20
                    },
                }
            }
        }
    }
}
