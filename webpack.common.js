
const path = require("path")
const webpack = require("webpack")

// webpack plugins
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const indexHtml = path.join(__dirname, "src", "index.html")

module.exports = {
    entry: {
        app: "./src/main.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[chunkhash].js"
    },
    resolve: {
        extensions: [ ".ts", ".js" ]
    },
    module: {
        rules: [
            // parse index.html
            {
                test: indexHtml,
                use: [
                    { loader: "file-loader", options: { name: "[name].[ext]"}},
                    { loader: "extract-loader" },
                    { loader: "html-loader" }
                ]
            },
            // angular templates
            {
                test: /\.html$/,
                include: [
                    path.resolve(__dirname, "src", "templates")
                ],
                use: [
                    { loader: "ngtemplate-loader" },
                    { loader: "html-loader" }
                ]
            },
            // typescript
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            // binary files
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader"
            },
            // compile and embed scss
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" }, // creates style nodes from JS strings
                    { loader: "css-loader" }, // translates CSS into common JS
                    { loader: "sass-loader" } // compiles sass to css
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ]
}