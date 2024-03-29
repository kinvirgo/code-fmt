// Prettier只关注代码格式，也支持自动修复，规则和ESLint不同
// 采用.prettierrc.yaml文件原因是方便可以添加注释
// Prettier配置优先级别 > EditorConfig配置

module.exports = {
	// 指定字符数后强制换行，默认是 80 列
	// printWidth: 60,

	// tab键盘宽度
	tabWidth: 4,

	// 用制表符而不是空格缩进行
	useTabs: true,

	// 代码结尾的分号
	semi: false,

	// 使用单引号，默认是 false
	singleQuote: true,

	// 对象属性引号
	quoteProps: "consistent",

	// jsx中单引号替换双引号
	jsxSingleQuote: false,

	// 多行数组对象末尾逗号
	trailingComma: "all",

	// 对象文字中的括号之间打印空格
	bracketSpacing: true,

	// 将>多行 HTML（HTML、JSX、Vue、Angular）元素的 放在最后一行的末尾，而不是单独放在下一行（不适用于自关闭元素）
	bracketSameLine: true,

	// 箭头函数参数使用圆括号包裹 比如 (x) => x 和 x => x 的区别
	arrowParens: "avoid",

	// 是否对 Vue 文件中 <script> 和 <style> 标签内的代码应用缩进
	vueIndentScriptAndStyle: true,
}
