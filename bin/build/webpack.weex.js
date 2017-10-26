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

console.log('server is running! Please open ' + chalk.green('http://' + ip + ':8080/index.js'));
module.exports = weexConfig;
