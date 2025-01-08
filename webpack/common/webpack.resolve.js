const path = require('path');

module.exports = {
  alias: {
    '@config': path.resolve(__dirname, '../../src/config'),
    '@framework': path.resolve(__dirname, '../../src/00.framework'),
    '@core': path.resolve(__dirname, '../../src/01.core'),
    '@infra': path.resolve(__dirname, '../../src/02.infrastructure'),
    '@endpoints': path.resolve(__dirname, '../../src/03.endpoints'),
  },
  extensions: ['.ts', '.js'],
};
