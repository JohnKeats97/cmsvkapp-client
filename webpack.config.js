'use strict';

const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './main2.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.(s)?css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options:
                            {
                                minimize: true
                            }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
