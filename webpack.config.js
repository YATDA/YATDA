const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPluginConfig = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const {HotModuleReplacementPlugin, NoEmitOnErrorsPlugin} = webpack;

module.exports = {
  context: __dirname,

  devServer: {port: 3000},

  // the starting file from which webpack will compile
  entry: [
    // entry point for hot reloading
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    // entry point for our app
    './dev/index.js',
  ],

  /**
   * These are all of the modules that webpack uses to compile our code.
   * Webpack by itself doesn't understand anything but JavaScript, so we use
   * various loaders to tell Webpack what to do with various files.
   */
  module: {
    loaders: [
      /**
       * This loader looks that all code that fits the test (RegEx)
       * and passes it through babel.
       */
      {exclude: /node_modules/, loader: 'babel-loader', test: /\.jsx?/},
      {loader: ['style-loader', 'css-loader'], test: /\.css$/},
    ],
  },

  /**
   * This is the output generated by webpack - with an appended hash
   */
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  /**
   * Plugins can be written to do just about anything but usually they handle
   * things that the loaders do not.
   */
  plugins: [
    /**
     * The HtmlWebpackPlugin creates an HTML file based off of a template. The
     * template is optional but gives more flexibility as to what your HTML
     * looks like.
     */
    new HtmlWebpackPluginConfig({
      hash: true,
      template: './dev/index.html',
      title: 'Yet Another To Do App',
    }),

    /**
     * This plugin just copies files from one directory to another. We want to
     * keep all of our development files in one folder and distribution files
     * in the dist folder, so some static assets need to be copied over.
     */
    new CopyWebpackPlugin([
      {
        from: 'dev/favicon.ico',
        to: 'dist/favicon.ico',
      },
    ]),

    /**
     * Hot Module reloading
     */
    new HotModuleReplacementPlugin(),

    /**
     * Assets that have errors will not be re-bundled.
     */
    new NoEmitOnErrorsPlugin(),
  ],

  // This is a list of filetypes that should be resolved by webpack
  resolve: {extensions: ['.js', '.jsx']},
};
