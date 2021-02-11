const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const buildPath = path.resolve(__dirname, "./dist");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings      
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    compress: false,
    contentBase: buildPath,
    disableHostCheck: true,
    historyApiFallback: true,
    //host: "127.0.0.1",
    hot: true,
    inline: true,
    port: 8081,
    stats: {
      children: false,
      maxModules: 0
    }
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};