const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './scripts/script.js', // Path to your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-library.min.js', // exportable file name
    libraryTarget: 'module',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        mangle: true,  // Shortens variable names
        compress: true,  // Removes dead code and optimizes the code
      },
    })],
  },
  experiments: {
    outputModule: true,  // Enable module output
  },
};
