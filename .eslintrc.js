module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jquery: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    eqeqeq: 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
        ],
      },
    ],
    'no-shadow': [
      'error',
      {
        allow: [
          'state', // for vuex state
        ],
      },
    ],
    'no-console': 'off',
  },
  globals: {
    AMap: 'readonly', // for AMap API
    echarts: 'readonly', // for echarts API
    uni: 'readonly', // for uniapp API
    wx: 'readonly', // for Weixin Miniprogram API
    tt: 'readonly', // for Byte Miniprogram API
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
  },
};
