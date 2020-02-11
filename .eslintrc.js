module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  rules: {
    'func-names': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'no-continue': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }] // for文は許可する
  },
  overrides: [
    {
      files: '*.ts',
      extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
    },
  ],
};
