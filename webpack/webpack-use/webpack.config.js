const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode:'production',
  entry: {
    index: './src/index.js'
  },
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-eval-source-map', // cheap-module-source-map
  module:{
    rules: [
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: 'images/'
      //     }
      //   }
      // },
      {
        test: /\.jsx?$/,
        loader: ['babel-loader', ''],
        // 配置了babelrc 就不能保留options了， 否则会报错
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin() // 对css比较友好
  ],
  optimization:{
    usedExports: true
  },
  devServer:{
    contentBase: './dist',
    open: true,
    port: 8081,
    hot: true,
    hotOnly:true,
    proxy:{
      '/api':{
        target: 'http://localhost:8082'
      }

    }
  }
}