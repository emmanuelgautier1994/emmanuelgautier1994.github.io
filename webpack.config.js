const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    app: './src/app.js',
    react: ['react', 'react-dom'],
    immutable: ['immutable'],
  },

  plugins: [
    new CopyWebpackPlugin(['static']),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'index.html',
      template: 'static/index.html',
    }),
  ],

  devServer: {
    contentBase: './dist',
  },

  optimization : {
    splitChunks : {
      chunks: 'all'
    },
    runtimeChunk : true
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}

