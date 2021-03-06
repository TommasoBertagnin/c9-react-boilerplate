var path = require('path');

var port = process.env.PORT || 8080;
var host = process.env.IP || '127.0.0.1';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'normalize.css',
    './src/styles/app.less',
    'eventsource-polyfill', // necessary for hot reloading with IE
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      query: {
        presets: [ 'es2015', 'react', 'react-hmre' ]
      }
    }, {
      test: /\.(less|css)$/,
      loader: "style!css!less"
    }]
  },
  resolve: {
    root: path.resolve('./src'),
  },
  devServer: {
    port: port,
    host: host
  }
};
