const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Path to your main JavaScript file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-video-player-library.min.js', // exportable file name
    library: 'VideoPlayerLibrary', // exportable library name
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        mangle: true, // Note `mangle.properties` is `false` by default.
      },
    })],
  },
};
