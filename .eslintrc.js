/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  plugins: ['import', '@typescript-eslint', 'prettier', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: './',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'import/no-named-as-default': 'off',
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: ['.*.js', 'node_modules/'],
  overrides: [{ files: ['*.js?(x)', '*.ts?(x)'] }],
};
