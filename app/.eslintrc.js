// @typescript-eslint specific file
// doesn't handle nodejs requires
module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    //'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    //"plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    '@typescript-eslint/prefer-rest-params': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0, // even though js files in override, typescript-eslint does them anyway
    '@typescript-eslint/no-inferrable-types': [
      2,
      {
        ignoreParameters: true,
        ignoreProperties: false,
      },
    ],
    '@typescript-eslint/no-empty-function': [0],
    '@typescript-eslint/no-explicit-any': [
      0,
      {
        fixToUnknown: false,
        ignoreRestArgs: true,
      },
    ],
  },
  // overrides: [
  //   {
  //     files: ['**/*.js'],
  //     env: {
  //       node: true,
  //       commonjs: true,
  //       es2021: true,
  //     },
  //     extends: 'eslint:recommended',
  //     parserOptions: {
  //       ecmaVersion: 12,
  //     },
  //     rules: {
  //       indent: 0, // ['error', 2] conflicting with prettier
  //       'linebreak-style': ['error', 'unix'],
  //       semi: ['error', 'always'],
  //     },
  //   },
  // ],
};
