module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'index.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  modulePathIgnorePatterns: ['<rootDir>/.*/__mocks__'],
  reporters: ['default', 'jest-junit'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.(unit|spec|e2e|e2e-spec|test).ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
