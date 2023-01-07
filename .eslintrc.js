module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
    'eslint-config-prettier',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/react',
    // "plugin:jest/recommended",
  ],
  overrides: [],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    camelcase: 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'warn',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'default-param-last': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'new-cap': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {
        root: ['./'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@styles': './src/styles',
        },
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/**', '*.test.js'],
};
