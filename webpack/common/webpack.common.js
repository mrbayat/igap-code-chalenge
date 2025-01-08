const nodeExternals = require('webpack-node-externals');

const webpackResolve = require('./webpack.resolve');

const TARGET = 'node';

module.exports = {
  target: TARGET,
  entry: './src/index.ts',
  resolve: webpackResolve,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    maxEntrypointSize: 400000,
    maxAssetSize: 300000,
  },
};
