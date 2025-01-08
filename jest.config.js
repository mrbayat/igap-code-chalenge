module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@infra/(.*)$': '<rootDir>/src/02.infrastructure/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
  },
};
