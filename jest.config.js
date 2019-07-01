module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: [require.resolve('./jest-setup')],
};
