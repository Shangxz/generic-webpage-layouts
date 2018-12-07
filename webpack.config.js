var HTMLWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
   template: __dirname + '/public/index.html',
   filename: 'index.html',
   inject: 'body'
});

module.exports = {
   entry: __dirname + '/src/index.js',
   mode: 'development',
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            loader: 'style-loader'
         },
         {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
               modules: true,
               localIdentName: '[name]__[local]___[hash:base64:5]'
            }
         }
      ]
   },
   output: {
      filename: 'transformed.js',
      path: __dirname + '/build'
   },
   plugins: [HTMLWebpackPluginConfig,
      new CopyWebpackPlugin([
      // relative path is from src
      {
         from: 'public/favicon.ico'
      }, // <- your path to favicon
   ])]
};
