import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier, { rules } from 'eslint-config-prettier';

export default [
    {
        files: ['*/*.ts'],
        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
            ecmaVersion: 'latest',
        },
        plugins:{
            '@typescript-eslint':tsPlugin,
            prettier: prettierPlugin,
        },
        rules:{
            semi: ['error', 'always'],
            'prettier/prettier':[
                'error',
                {
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'all',
                },
            ],
        },
    },
    eslintConfigPrettier,
];