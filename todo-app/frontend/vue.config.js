const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new CompressionPlugin(),
    ],
  },
  productionSourceMap: false,
};
