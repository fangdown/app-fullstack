const path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
