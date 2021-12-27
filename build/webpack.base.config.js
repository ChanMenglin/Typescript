/**
 * created: 2021-12-27
 * webpack 公共环境配置
 */
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "app.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: "ts-loader"
                }],
                exclude: /mode_modules/
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/tpl/index.html"
        })
    ]
}