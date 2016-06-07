module.exports = {
    entry: "./main.js",
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
                loader  : "babel-loader"
            },
            {
                test    : /\.less$/,
                loader  : 'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};