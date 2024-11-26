import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import js from '@eslint/js'

export default [
    js.configs.recommended,
    {
        ignores: ['dist'],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            parser: tseslint.parser,
        },
        plugins: {
            react,
            prettier,
            'react-hooks': reactHooks,
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    endOfLine: 'auto',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-console': 'warn',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]
