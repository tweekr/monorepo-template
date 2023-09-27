module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
  projects: [
    '<rootDir>/apps/{name}/jest.unit.config.js',
    // add more projects here
  ],
  coverageDirectory: '<rootDir>/coverage/',
};
