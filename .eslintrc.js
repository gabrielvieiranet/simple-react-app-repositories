module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
<<<<<<< HEAD
    'plugin:react/recommended',
=======
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
<<<<<<< HEAD
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off'
=======
      { extensions: ['.jsx', '.js']}
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off'
>>>>>>> 8dbd686915a0b0c035ffb87156d2e5041c551bdb
  },
};
