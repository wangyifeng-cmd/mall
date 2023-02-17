module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 强制句末分号
    semi: [2, 'never',],
    // 单引号
    quotes: [2, 'single',],
    //强制末尾逗号
    'comma-dangle': [2, {
      'arrays': 'always',
      'objects': 'always',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    },],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
