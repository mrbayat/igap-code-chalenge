const path = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const common = require('./common/webpack.common');

module.exports = merge(common, {
  mode: 'development',
  target: 'node',
  entry: {
    main: './src/index.ts',
    cli: './src/03.endpoints/cli/cli.ts',
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  externals: [nodeExternals()],
  plugins: [
    new NodemonPlugin({
      script: path.resolve(__dirname, '../dist', 'main.js'),
      watch: path.resolve(__dirname, '../dist', 'main.js'),
      ignore: ['node_modules/**'],
      ext: 'js,ts,json',
    }),
  ],
  cache: {
    type: 'memory',
  },
  stats: 'minimal',
  performance: {
    hints: false,
  },
});
