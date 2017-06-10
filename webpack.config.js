const path = require("path");
const HtmlWebpackPluginConfig = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    }),
    new CopyWebpackPlugin([
      {
        from: 'dev/favicon.ico', to: 'dist/favicon.ico'
      }
    ])
  ],
  devServer: {
    port: 3000
  }
};