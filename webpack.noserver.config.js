require('dotenv').config()
const path = require('path')

const PATHS = {
  dist: path.join(__dirname, 'dist'),
}

const plugins = [
]

module.exports = {
  plugins,
  watch: true,
  devtool: 'source-map',
  mode: 'development',
  entry: `./src/sudoku.ts`,

  output: {
    filename: 'sudoku.js',
    path: PATHS.dist,
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
    contentBase: `./dist`,
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.sass'],
  },
}
