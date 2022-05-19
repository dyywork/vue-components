module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        //'plugin:vue/vue3-recommended',
        'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    parser: 'vue-eslint-parser',
    "parserOptions": {
        parser:'babel-eslint',
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "vue",
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    }
}