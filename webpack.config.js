const path = require('path');

module.exports = {
  // mode: 'development',
  entry: __dirname +'/src/script/globalExport.js',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'bundle.min.js',
  },
};