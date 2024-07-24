module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        useTabs: false,
      },
    ],
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    semi: 'error',
    'prefer-const': 'warn',
    trailingComma: 1,
    tabWidth: 2,
    useTabs: 1,
  },
};
