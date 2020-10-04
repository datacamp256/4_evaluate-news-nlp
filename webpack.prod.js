const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = merge(common, {
    mode: 'production',
    // rules: [
    //     {
    //         test: /\.scss$/,
    //         use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    //     }
    // ],
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
});
