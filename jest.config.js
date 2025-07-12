module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|svg)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
