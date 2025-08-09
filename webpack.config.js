const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.jsx', // điểm vào
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // tên file output
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.css$/i, // xử lý file .css
        use: [
          'style-loader', // Inject CSS vào DOM thông qua <style>
          {
            loader: 'css-loader', // xử lý import, url() trong CSS
            options: {
              importLoaders: 1, // để postcss-loader xử lý trước
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|jpg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]', // Tùy chỉnh đường dẫn output
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // có thể import không cần ghi đuôi
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
  mode: 'development',
  devtool: 'source-map', //'eval-source-map',
};
