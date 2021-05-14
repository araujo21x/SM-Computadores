module.exports = {
   'env': {
      'browser': true,
      'es2021': true,
   },
   'extends': [
      'google',
   ],
   'parserOptions': {
      'ecmaVersion': 12,
      'sourceType': 'module',
   },
   'rules': {
      'indent': ['error', 3],
      'no-unused-vars': 'off',
      'require-jsdoc': 0,
   },

};

