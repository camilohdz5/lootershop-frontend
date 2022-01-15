module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': ['off', { extensions: ['.js', '.jsx'] }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': ['error', { ignore: ['src'] }],
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'prefer-default-export': 0,
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
