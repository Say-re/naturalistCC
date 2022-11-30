const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const path = require('path');

module.exports = {
  entry: [ './src/client/index.js' ],
  devServer: {
    port: 1994,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader?name=[name]-[hash:base64:7].[ext]',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(txt|csv)$/,
        use: 'raw-loader',
      },
    ],
  },
  output: {
    filename: 'application-dev-bundle.js',
    path: path.resolve(__dirname, 'dist', 'client', 'dev'),
    publicPath: '/',
  },
  plugins: [
    new Dotenv(),
    new webpack.DefinePlugin({
      process: JSON.stringify({
        env: {
          NODE_ENV: 'development',
          PUBLIC_URL: process.env.PUBLIC_URL,
        },
      })
    }),
    new HtmlWebpackPlugin({
      template: './dist/client/index.html',
    }),
  ],
  resolve: {
    extensions: [ '*', '.js', '.jsx', '.css' ],
    alias: {
      'styled-components': path.resolve(__dirname, './', 'node_modules', 'styled-components'),
    },
  },
  stats: {
    errorDetails: true,
    children: true,
  }
};
