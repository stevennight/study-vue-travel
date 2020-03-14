const path = require('path');

module.exports = {
  devServer:{
    historyApiFallback: true,
    contentBase: [path.join(__dirname, "public"), path.join(__dirname, "static")],
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api/(.*?)(\\?.*?)?$': '/mock/$1.json$2',
        },
        logLevel: 'debug' // this what you want
      },
    },
  },
};
