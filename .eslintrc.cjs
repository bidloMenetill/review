const rules = {
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'prefer-const': 'error',
  'prettier/prettier': [
    'error',
    {},
    {
      usePrettierrc: true,
    },
  ],
  'no-restricted-syntax': [
    'warn',
    {
      selector: 'MemberExpression[property.name="log"]',
      message: 'Remove all logs before release',
    },
  ],
  'no-empty': ['error', { allowEmptyCatch: true }],
  'no-var': 'error',
  'no-self-compare': 'error',
  'no-eval': 'error',
  'no-multi-spaces': [
    'error',
    { ignoreEOLComments: true, exceptions: { PropertyAssignment: false } },
  ],
  'no-useless-computed-key': 'error',
  'no-lone-blocks': 'error',
  'no-whitespace-before-property': 'error',
  'react-hooks/exhaustive-deps': 0,
  'import/no-duplicates': 'error',
  'import/no-useless-path-segments': 'error',
  'import/first': ['error', 'absolute-first'],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
      ],
    },
  ],
};

module.exports = {
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  plugins: ['react-hooks', 'import'],
  rules: { ...rules },
};
