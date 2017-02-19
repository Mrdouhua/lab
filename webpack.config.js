var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    path: './public',
    filename: 'bundle.js'
    // publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]"
      },
      {
        test: /\.(png|jpg)$/, 
        loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'
      }
    ]
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
}
