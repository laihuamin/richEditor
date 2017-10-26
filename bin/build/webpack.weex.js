const webpack = require('webpack');
const config = require('./webpack.base');
const ip = require('ip').address();
const chalk = require('chalk');
const merge = require('webpack-merge');

const weexConfig = merge(config[1], {
    output: {
        filename: '[name].js'
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: '// { "framework": "Vue" } \n',
            raw: true,
            exclude: 'Vue'
        })
    ]
});

module.exports = weexConfig;
