var webpack = require('webpack');
var path = require('path');



module.exports = {
  entry: "./js/index.js",
  devtool: "source-map",
  output: {
      path: path.resolve(__dirname, './public/dist'),
      filename: "bundle.js"
  },
module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }
      ]
    }
 }
