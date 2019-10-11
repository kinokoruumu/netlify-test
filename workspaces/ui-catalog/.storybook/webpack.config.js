const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../../app/src"),
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
