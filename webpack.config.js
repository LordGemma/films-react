const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, options) {
  const isProduction = options.mode === 'production';

  const config = {
    context: path.join(__dirname, 'src'),
    entry: './',
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
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
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'App',
        hash: true,
        template: path.resolve(__dirname, './index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      hot: true,
      historyApiFallback: true,
    },

    output: {
      filename: '[name][hash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
  };

  return config;
};
