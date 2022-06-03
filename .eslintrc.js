module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		parser: 'babel-eslint',
	},

	rules: {
		'prettier/prettier': 'error',
		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'import/prefer-default-export': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/prop-types': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
		camelcase: 'off',
		'class-methods-use-this': 'off',
	},
};
