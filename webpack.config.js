'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss-scss');

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
        test: /\.css$/,
        loader: ['style', 'css']
      },
      {
        test: /\.scss$/,
        loader: ['style', 'css', 'sass']
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
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main'],
      favicon: './src/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
