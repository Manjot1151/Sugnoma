
// eslint-disable-next-line no-undef
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	plugins: ['import', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2021
	},

    rules: {
        'import/order': [
            'error',
            {
              groups: ['builtin', 'external', 'internal', 'index', 'sibling', 'parent'],
              alphabetize: {
                order: 'asc'
                }
            }
        ],

        'no-compare-neg-zero': 'error',
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-self-compare': 'error',
        'no-template-curly-in-string': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unsafe-negation': 'error',

        'accessor-pairs': 'warn',
        'arrow-body-style': 'error',
        'consistent-return': 'error',
        'consistent-this': 'error',
        curly: ['error', 'multi-line', 'consistent'],
        'dot-notation': 'error',
        'func-name-matching': 'error',
        'func-names': 'error',
        'no-array-constructor': 'error',
        'no-empty': 'off',
        'no-empty-function': 'error',
        'no-floating-decimal': 'error',
        'no-invalid-this': 'error',
        'no-label-var': 'error',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-octal-escape': 'error',
        'no-restricted-globals': [
            'error',
            {
                name: 'process',
                message: 'Import process from `node:process`'
            }
        ],
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'no-warning-comments': 'warn',
        'operator-assignment': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-has-own': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-rest-params': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        'require-await': 'error',
        'spaced-comment': 'error',
        strict: ['error', 'global'],
        yoda: 'error',

        'array-bracket-spacing': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs'],
        'comma-dangle': 'error',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'eol-last': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'object-curly-spacing': ['error', 'always'],
        'padded-blocks': ['error', 'never'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'rest-spread-spacing': 'error',
        semi: 'error',
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'error'
    }
};
