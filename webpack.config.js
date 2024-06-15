const path = require('path');
<<<<<<< HEAD
//const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
=======

>>>>>>> a9ba89f6ec26443b917b35c469b0ed9c4a54af9e
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
<<<<<<< HEAD

  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
=======
>>>>>>> a9ba89f6ec26443b917b35c469b0ed9c4a54af9e
};
