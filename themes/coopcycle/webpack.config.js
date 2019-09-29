const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const WebpackAssetsManifest = require('webpack-assets-manifest')
const path = require('path')

const cssFilename = process.env.NODE_ENV === 'production' ? 'css/[name].[contenthash].css' : 'css/[name].css'
const jsFilename = process.env.NODE_ENV === 'production' ? 'js/[name].[chunkhash].js' : 'js/[name].js'

let webpackConfig = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    style: './src/scss/style.scss',
    index: './src/scripts/index.js',
    homepage: './src/scripts/homepage.js'
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/static'),
    filename: jsFilename,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/src/scripts',
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
          test: /\.svg$/,
          loader: 'file-loader?name=svg/[name].[ext]'
      },
      {
          test: /\.(png)$/,
          loader: 'url-loader'
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: cssFilename}),
  ]
};

if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins.push(new WebpackAssetsManifest({
    writeToDisk: true,
    output: path.join(__dirname, '/data/manifest.json'),
  }));
}

module.exports = webpackConfig;
