module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    globals: {},
    rules: {
        'semi': [
            'error',
            'never'
        ],
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'eqeqeq': 'error',
        'no-else-return': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'space-infix-ops': 'error',
        'no-duplicate-imports': 'error',
        'no-var': 'error',
        'prefer-const': 'warn',
        'spaced-comment': [
            'error',
            'always'
        ],
        'indent': [
            'error',
            4,
            {
                'VariableDeclarator': 'first',
                'SwitchCase': 1
            }
        ]
    },
    overrides: [
        {
            'files': [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            'env': {
                'jest': true
            }
        }
    ]
}
