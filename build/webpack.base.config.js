/**
 * created: 2021-12-27
 * webpack 公共环境配置
 */
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

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
                    loader: "ts-loader",
                    options: {
                        // 只做类型转换，不做类型检查，可提高构建速度
                        // 缺点：在编译时不能做类型检查
                        // 可以借助 fork-ts-checker-webpack-plugin 插件解决类型检查问题
                        transpileOnly: true, 
                    }
                }],
                exclude: /mode_modules/
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/tpl/index.html"
        }),
        new ForkTsCheckerWebpackPlugin()
    ]
}