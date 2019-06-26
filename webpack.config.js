const path = require("path");

module.exports = {
  entry : [
    "./src/index.js"
  ],

  output : {
    filename  : "[name].js",
    path      : __dirname + '/dist'
  },

  mode : "production"
};
