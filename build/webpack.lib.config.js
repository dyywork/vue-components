
const nodeExternals = require('webpack-node-externals');
const path = require("path");
const WebpackBar = require("webpackbar");
module.exports = {
    css: {
        extract: {
            filename: 'index.css',
        },
    },
    outputDir: 'lib',
    configureWebpack: {
        // mode: 'production',
        entry: './package/components/index.js',
        output: {
            path: path.resolve(process.cwd(), './lib'),
            filename: 'DUI.umd.js',
            libraryExport: 'default',
            libraryTarget: 'umd',
        },
        plugins: [
            new WebpackBar(),
        ],
        resolve: {
            alias: {
                "@docs": path.join(__dirname, '../package/docs'),
                "@src": path.join(__dirname, '../src'),
            }
        },
        externals: [nodeExternals()],
    },

}
