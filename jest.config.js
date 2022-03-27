function makeModuleNameMapper(tsconfigPath) {
  // Get paths from tsconfig
  const { paths, baseUrl } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)');
    const path = paths[item][0].replace('/*', '/$1');
    aliases[key] = '<rootDir>/' + baseUrl + '/' + path;
  });
  return aliases;
}

const TS_CONFIG_PATH = './tsconfig.json';

module.exports = {
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: makeModuleNameMapper(TS_CONFIG_PATH),
  testEnvironment: 'jest-environment-jsdom',
};
