import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    curly: [],
  },
  rules: {
    'curly': ['error', 'multi-line'],
    'no-console': 'warn',
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'node/prefer-global/process': 'off',
  },
});
