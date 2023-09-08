const { TextEncoder } = require("util");

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
  globals: {
    "TextEncoder": TextEncoder
  },
  roots: ["<rootDir>/src/"],
  transform: {
    "\\.ts$": ["babel-jest", { configFile: "./babel-jest.config.js" }]
  }
};
