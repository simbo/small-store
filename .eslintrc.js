module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-unicorn',
    'eslint-plugin-jsdoc',
    'eslint-plugin-prefer-arrow',
    '@typescript-eslint',
    '@typescript-eslint/tslint'
  ],
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array'
      }
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit'
        }
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true
      }
    ],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': 'error',
    complexity: [
      'error',
      {
        max: 12
      }
    ],
    'constructor-super': 'error',
    curly: ['error', 'multi-or-nest'],
    'default-case': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'always'],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'error',
    'import/no-deprecated': 'warn',
    'import/order': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-types': 'error',
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 120
      }
    ],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-fallthrough': 'error',
    'no-irregular-whitespace': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2
      }
    ],
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-restricted-imports': ['error', 'rxjs/Rx'],
    'no-return-await': 'error',
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        allowStandaloneDeclarations: true
      }
    ],
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'unicorn/filename-case': 'error',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          encoding: true,
          'import-spacing': true,
          'no-unnecessary-callback-wrapper': true,
          'prefer-method-signature': true,
          typedef: [true, 'call-signature'],
          whitespace: [
            true,
            'check-branch',
            'check-decl',
            'check-module',
            'check-operator',
            'check-rest-spread',
            'check-separator',
            'check-type',
            'check-typecast',
            'check-type-operator',
            'check-preblock'
          ]
        }
      }
    ]
  }
};
