const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin({
    //  In case this slows down the build performance - change it to async: true
    async: false
  })
];