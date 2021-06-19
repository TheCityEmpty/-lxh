module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  rules: {
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^h$',
        varsIgnorePattern: '^h$'
      }
    ],
    'space-before-function-paren': 'off',
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never']
  }
}
