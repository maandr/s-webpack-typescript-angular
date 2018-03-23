const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const UglifyJsPlugin = require("uglify-webpack-plugin")

module.exports = merge(common, {
    plugins: [
        new UglifyJsPlugin()
    ]
})