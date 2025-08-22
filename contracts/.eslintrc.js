module.exports = {
  env: {
    browser: false,
    es6: true,
    mocha: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "@typescript-eslint/eslint-plugin/recommended",
    "@typescript-eslint/eslint-plugin/stylistic",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};