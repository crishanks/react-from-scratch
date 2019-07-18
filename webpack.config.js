const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    //default entry point is ./src/index.js
    //default output point is ./src/index.html
    rules: [
      {
        test: /\.(js|jsx)|$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};