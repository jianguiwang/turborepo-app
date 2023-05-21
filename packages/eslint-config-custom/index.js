module.exports = {
  extends: ['next', 'turbo', 'prettier', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'prefer-const': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
  // parserOptions: {
  //   babelOptions: {
  //     presets: [require.resolve('next/babel')],
  //   },
  // },
}
