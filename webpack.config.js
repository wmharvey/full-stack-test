const webpack = require('webpack');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve( __dirname, '/dist/public' ),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: "full-stack test"
    })],
  module: {
    preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|lib/,
                loader: "jshint-loader"
            }
        ],
    loaders: [
      { test: /\.css$/,loader: 'style!css'},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  jshint: {
    esversion: 6
  }
};
