module.exports = {
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'prettier'
    ],
    rules: {
        'prettier/prettier': [
            "error",
            {
                "tabWidth": 2,
            },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
    },
    root: true,
};