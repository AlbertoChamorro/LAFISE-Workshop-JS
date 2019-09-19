const path = require('path')
const webpack = require ("webpack")

module.exports = {
    entry: ['./src/js/index.js'],
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 9000,
        writeToDisk: true,
        publicPath: '/dist/'
      }
};