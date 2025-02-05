const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: "production",
    
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },

    plugins: [
      new HtmlWebpackPlugin({
          title: 'GeekBrains Shop JS2',
          template: path.resolve(__dirname, './public/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),

      new CopyWebpackPlugin({
        patterns: [ 
          {
            from: path.resolve(__dirname, './public/style.css'),
            to: path.resolve(__dirname, './dist/style.css')
          },
        ],
      })
    ],

    devServer: {
      port: 8080,
      proxy: {
        '/api/v1': 'http://localhost:3000',
      },
    },
}