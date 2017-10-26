const config = require('./webpack.base');
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');

const webConfig = merge(config[0], {
    output: {
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../../'),
        compress: true,
        hot: true,
        port: 80,
        publicPath: '/',
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})

Object.keys(webConfig.entry).forEach((item) => {
    const conf = {
        filename: `./${item}.html`,     //生成相对于publicPath的路径
        template: './web/layout/default.html',  //html模版
        inject: true,
        chunks: [item]
    };
    webConfig.plugins.push(new htmlWebpackPlugin(conf));
});

module.exports = webConfig;
