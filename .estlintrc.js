module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    _: true,
    $: true,
  },

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: [
    "react",
    // "@typescript-eslint"
  ],
  rules: {
    semi: 0,
    "no-unused-vars": [
      1,
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_|^err|^ev", // _xxx, err, error, ev, event
      },
    ],
    "no-useless-escape": 2,
  },
};
