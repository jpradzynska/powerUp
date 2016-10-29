'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  devServer: { hot: true },
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css', 'sass'])
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|swf)$/,
        loader: 'file-loader?name=assets/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main'],
      favicon: './src/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
