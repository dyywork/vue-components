const path = require('path');
const WebpackBar = require('webpackbar')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: {
        "dyyCode": "./package/components/dyyCode/index.js",
        "dyyTooltip": "./package/components/dyyTooltip/index.js",
        "mgSearchForm": "./package/components/mgSearchForm/index.js",
        "mgTable": "./package/components/mgTable/index.js",
    },
    output: {
        path: path.resolve(process.cwd(), './lib'),
        filename: '[name]/[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new WebpackBar(),
        new VueLoaderPlugin()
    ]
}