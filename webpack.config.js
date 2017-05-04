var path = require("path");

var config = {
  /*
   * The application entry file(s)
   */
  entry: ["./src/App.tsx"],

  /*
   * Specify the output bundled file
   */

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },

  /*
  * Files extensions we need to require in our code
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    /*
     * modules that process our files based on their extension.
     * test: check whether a condition is met
     * loader: the name of the module that will process the the file
     * exclude : exclude the files in a certain directory
     */
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;