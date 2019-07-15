module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  rules: {
    'func-names': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'no-continue': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }] // for文は許可する
  }
};
