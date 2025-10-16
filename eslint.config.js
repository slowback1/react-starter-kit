import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

const maximumComplexity = 5

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
    {
        rules: {
            'default-case': 'error',
            'default-case-last': 'error',
            'no-await-in-loop': 'error',
            'no-magic-numbers': [
                'error',
                {
                    ignoreDefaultValues: true,
                    ignoreArrayIndexes: true,
                    ignoreClassFieldInitialValues: true,
                    ignoreEnums: true,
                    ignore: [0, 1],
                },
            ],
            'no-multi-assign': 'error',
            'no-nested-ternary': 'error',
            complexity: [
                'error',
                { max: maximumComplexity, variant: 'modified' },
            ],
        },
    },
])
