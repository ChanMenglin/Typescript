/**
 * created: 2021-12-27
 * webpack 生产环境配置
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}