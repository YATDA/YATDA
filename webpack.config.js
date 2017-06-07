const path = require("path");
const HtmlWebpackPluginConfig = require("html-webpack-plugin");

module.exports = {
  entry: "./dev/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      { test: /\.jsx?/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPluginConfig({
      title: "Playground",
      hash: true,
      template: "./dev/index.html"
    })
  ],
  devServer: {
    port: 3000
  }
};