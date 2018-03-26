const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.config.js")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = merge(common, {
    plugins: [
        new UglifyJsPlugin()
    ],
    performance: {
        hints: "error"
    }
})