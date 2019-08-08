const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const isDevelopment = process.env.NODE_ENV !== 'production';
const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(srcDir, 'index.tsx'),

  output: {
    filename: 'bundle.js',
    path: distDir,
  },

  mode: isDevelopment
    ? 'development'
    : 'production',

  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],

    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|d.ts)$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers() {
            return ({
              before: [createStyledComponentsTransformer()],
            });
          },
        },
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: 'body',
    })
  ].concat(
    isDevelopment
      ? [
        new webpack.HotModuleReplacementPlugin(),
      ]
      : [

      ],
  ),

  devServer: {
    host: '0.0.0.0',
    port: '3000',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
  },
};
