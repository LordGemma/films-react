const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = function(env, options) {
  const isProduction = options.mode === "production";

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./",
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "none" : "source-map",

    resolve: {
      extensions: [".js", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: "babel-loader"
          },
          exclude: /node_modules/
        },
        {
          test:/\.css$/,
          use:['style-loader','css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            {loader: "style-loader"},
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: 'images',
              },
            },
          ],
        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "App",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
      contentBase: "./dist",
      hot: true,
    },

    output: {
      filename: '[name][hash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    }
  };

  return config;
};
