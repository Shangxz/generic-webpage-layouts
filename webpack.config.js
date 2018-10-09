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
            // Transform our own .css files with PostCSS and CSS-modules
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
         }, {
            // Do not transform vendor's CSS with CSS-modules
            // The point is that they remain in global scope.
            // Since we require these CSS files in our JS or CSS files,
            // they will be a part of our compilation either way.
            // So, no need for ExtractTextPlugin here.
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader'],
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
