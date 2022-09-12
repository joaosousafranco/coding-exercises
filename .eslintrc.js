module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint/eslint-plugin', "jest"],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb-base',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        overrides: {
          constructors: 'no-public',
          accessors: 'no-public',
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_*' },
    ],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['src/**/*.ts', 'test/**/*.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': [2, { props: false }],
    'no-shadow': 'off',
    'no-useless-constructor': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    indent: 'off',
    'function-paren-newline': 'off',
    'no-confusing-arrow': 'off',
    'no-underscore-dangle': [2, { allow: ['_links'] }],
    "jest/consistent-test-it": ["error", {"fn": "it"}]
  },
};
