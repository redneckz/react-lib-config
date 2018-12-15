module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  setupTestFrameworkScriptFile: require.resolve('./jest-setup'),
};
