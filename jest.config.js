const { TextEncoder, TextDecoder } = require("util");

module.exports = {
  collectCoverageFrom: [
    "src/**/*.ts"
  ],
  rootDir: "./",
  modulePathIgnorePatterns: [
    "/node_modules/",
    "/.github/",
    "/dist/",
  ],
  moduleNameMapper: {
    // "\\.(ts)$": "<rootDir>/__mocks__/document.ts",
    "library-react-hooks": "<rootDir>/node_modules/library-react-hooks/dist/index.js",
  },
  globals: {
    "TextEncoder": TextEncoder,
    "TextDecoder": TextDecoder,
  },
  roots: [
      "<rootDir>/src/",
    "<rootDir>/__mocks__/"
  ],
  transform: {
    "\\.ts$": ["babel-jest", { configFile: "./babel-jest.config.js" }]
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  // testEnvironment: 'jsdom'
  // reporters: [['github-actions', {silent: false}], 'summary'],
};
