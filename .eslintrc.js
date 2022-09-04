module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'react-native/no-inline-styles': 'off',
    // import plugins
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true, // ignore it to avoid bug with "import/order" rule
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {pattern: 'react', group: 'external', position: 'before'},
          {pattern: 'react-native', group: 'external', position: 'before'},
          {pattern: '~/**', group: 'external', position: 'after'},
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {order: 'asc'},
      },
    ],
    // import typescript
    'import/no-unresolved': 'error',
  },
  settings: {
    // ESLint doesn't find React Native components
    // Remove this setting when this issue is fixed.
    // https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['react-native'],
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint (and fix import error if import with alias like ~/)
    },
  },
};
