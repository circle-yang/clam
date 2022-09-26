/*
 * @Description:
 * @Author: yanghuan
 * @Date: 2022-09-23 18:42:13
 * @LastEditTime: 2022-09-27 00:14:14
 * @Last Modified by: yanghuan
 * @packageDocumentation:
 * @module:
 * @category:
 */
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:@typescript-eslint/recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "no-irregular-whitespace": 2,
    "no-case-declarations": 0,
    "no-undef": 0,
    "eol-last": 1,
    "block-scoped-var": 2,
    "comma-dangle": [2, "never"],
    "no-dupe-keys": 2,
    "no-empty": 1,
    "no-extra-semi": 2,
    "no-multiple-empty-lines": [1, { max: 1, maxEOF: 1 }],
    "no-trailing-spaces": 1,
    "semi-spacing": [2, { before: false, after: true }],
    "no-unreachable": 1,
    "space-infix-ops": 1,
    "spaced-comment": 1,
    "no-var": 2,
    "no-multi-spaces": 2,
    "comma-spacing": 1,
    semi: 1,
  },
};
