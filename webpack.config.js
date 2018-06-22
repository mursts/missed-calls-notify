const path = require("path");

const GASPlugin = require("gas-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.ts"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "awesome-typescript-loader"
      },
    ],
  },
  plugins: [
    new GASPlugin(),
  ],
};