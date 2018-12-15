module.exports = {
  'extends': ['airbnb'],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': ['import'],
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
  },
  'rules': {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.spec.{js,jsx}',
        '**/babel.config.js',
        '**/jest.config.js',
        '**/jest-setup.js',
        '**/rollup.js',
      ],
      optionalDependencies: false,
    }],
    'no-use-before-define': ['error', { 'functions': false }],
    'react/prop-types': 'off',
  },
};
