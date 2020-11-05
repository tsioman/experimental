const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {      
      components: path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname, "src"),
      css: path.resolve(__dirname, "css"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      }     
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ], 
};
