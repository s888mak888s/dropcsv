var webpack = require("webpack");

module.exports = {
    entry: './src/main/resources/static/js/index.js',
    output: {filename: './src/main/resources/static/js/bundle.js'},
    devtool: 'source-map',
    plugins: [
    	new webpack.optimize.UglifyJsPlugin()
    ]
};