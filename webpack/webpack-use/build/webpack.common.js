const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyrightWebpackPlugin = require('../plugins/copyright-webpack-plugin')
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev");
const prodConfig = require("./webpack.prod");

const commonConfig = {
  entry: {
    index: "./src/index-loader.js"
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 15500
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", {
          loader: path.join(__dirname, '../loader/replaceLoader.js'),
          options:{
            name: '全栈'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      title: "标题-自己取的"
    }),
    new CleanWebpackPlugin(),
    new CopyrightWebpackPlugin({
      name: 'fangdown'
    })
  ]
};

module.exports = env => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
};
