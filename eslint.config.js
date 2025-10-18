// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'

export default [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            prettier,
            '@typescript-eslint': typescriptPlugin,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...typescriptPlugin.configs.recommended.rules,
            'prettier/prettier': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
]
