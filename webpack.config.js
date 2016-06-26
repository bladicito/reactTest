var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: [
        "./main.js"
    ],

    output: {
        filename: "public/bundle.js"
    },
    loaders: ['babel?cacheDirectory'],
    query: {
        "presets": ["es2015", "react"]
    },
    module : {
        loaders: [
            {
                test    : /\.jsx?$/,
                exclude : /(node_modules)/,
                loader  : "babel-loader?presets[]=es2015&presets[]=react"
            },
            {
                test    : /\.less$/,
                loader  : 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                loader : 'url?prefix=font/&limit=10000'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins : [new CopyWebpackPlugin([
        { from: './assets/images/*.*', to: './public/' }
    ])]

};