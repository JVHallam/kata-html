const path = require("path");

module.exports = {
  entry : {
    index : "./src/index.js",
    extra : "./src/extra.js"
  },

  output : {
    filename  : "[name].js",
    path      : __dirname + '/exercises'
  },

  mode : "production"
};
