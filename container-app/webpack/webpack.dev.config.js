const merge = require("webpack-merge").default;
const baseConfig = require("./webpack.base.config");

const config = merge(baseConfig({ env: "development" }));

module.exports = config;
