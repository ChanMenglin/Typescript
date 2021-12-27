/**
 * created: 2021-12-27
 * webpack 配置文件的入口文件
 */
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base.config")
const devConfig = require("./webpack.dev.config")
const proConfig = require("./webpack.pro.config")

let config = process.NODE_DNV === "development" ? devConfig : proConfig

module.exports = merge(baseConfig, config)