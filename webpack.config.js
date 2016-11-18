var path = require('path');

module.exports = {
  context: path.join(__dirname,'/app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname,'/app'),
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'bower_components']
  },
  module: {
    loaders: [
      {test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }}
    ]
  }
};