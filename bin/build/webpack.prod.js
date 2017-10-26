const config = require('./webpack.base');
const webpack = require('webpack');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');

const webConfig = merge(config[0], {
    output: {
        //后面这窜是版本号
        filename: 'static/[name]-[chunkhash:8].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
})

Object.keys(webConfig.entry).forEach((item) => {
    const conf = {
        filename: `html/${item}.html`,
        template: './web/layout/default.html',
        inject: true,
        chunks: [item]
    };
    webConfig.plugins.push(new htmlWebpackPlugin(conf));
})

const weexConfig = merge(config[1], {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.BannerPlugin({
            banner: '// { "framework": "Vue" } \n',
            raw: true,
            exclude: 'Vue'
        })
    ]
})
module.exports = [webConfig, weexConfig];
