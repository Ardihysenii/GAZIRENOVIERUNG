const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Sigurohu që kjo linjë është këtu

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './aboutus.html',
      filename: 'aboutus.html',
    }),
    new HtmlWebpackPlugin({
      template: './portfolio.html',
      filename: 'portfolio.html',
    }),
  ],
};
