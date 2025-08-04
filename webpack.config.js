
const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JS file
  output: {
    filename: 'bundle.js', // This is the compiled file name
    path: path.resolve(__dirname, 'dist') // This is where the file goes
  },
  mode: "production"
, // Change to 'production' for optimized builds
};
