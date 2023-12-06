module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        '@angular-eslint',
        'complexity'
    ],
    "rules": {
        'complexity': ['error', { 'max': 10 }],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off"
        
    }
}
