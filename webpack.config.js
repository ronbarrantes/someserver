require('dotenv').config()

const path = require('path')
const { EnvironmentPlugin } = require('webpack')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
  public: path.join(__dirname, 'public'),
  dist: path.join(__dirname, 'dist'),
}

const plugins = [
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({ patterns:[{ from: 'public', to: 'public' }] }),
  new EnvironmentPlugin({
    // NODE_ENV: process.env.NODE_ENV,
    // ASSETS_PATH: process.env.ASSETS_PATH,
    // API_URL: process.env.API_URL,
  }),

  new OptimizeCSSAssetsPlugin({}),
]

const optimization = {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
}

// if (production) {
//   optimization.minimizer = [new UglifyJsPlugin()]
// }

module.exports = {
  plugins,
  optimization, 
  watch: true,
  devtool: 'source-map',
  mode: 'development', 
  entry: `./src/server.ts`,

  output: {
    filename: '[name].[hash].js',
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
