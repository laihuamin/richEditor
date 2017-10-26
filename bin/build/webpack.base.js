const pathTo = require('path');
const path = require('path');

const prefix = './src/';
const getEntry = require('./get_entry');
const entry = getEntry(prefix + '**/index.js', prefix);

// 这里的配置就是webpack的配置

const webConfig = {
    context: pathTo.join(__dirname, '../../'),
    entry,
    output: {
        path: pathTo.join(__dirname, '../../dist/'),
        publicPath: '/weex/',
        filename: 'static/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'vue-loader'
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'less-loader'
                }]
            }
        ]
    }
}


const weexConfig = {
    entry,
    output: {
        path: pathTo.join(__dirname, '../../dist/'),
        filename: 'weex/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'weex-loader'
                }]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'less-loader'
                }]
            }
        ]
    }
}

module.exports = [webConfig, weexConfig];
