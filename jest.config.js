/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'babel',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  preset: 'ts-jest',
  testEnvironment: 'node'
};
