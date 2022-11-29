export default {
	'fmt/**.{css,html,js,json,vue,wxml,wxss}':
		'prettier --write',
	'/fmt/*.{js,ts}': 'eslint --fix',
}
