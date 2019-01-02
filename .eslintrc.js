module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  extends: 'google',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  globals: {
    window: true,
    window: true,
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 2,
        ObjectExpression: 1,
        ArrayExpression: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
