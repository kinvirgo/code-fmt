# editorconfig 配置

## 广泛支持属性

```sh
# 是否是顶级配置文件，设置为true的时候才会停止搜索.editorconfig文件
root : true | false

# 缩进风格
indent_style : tab | space

# 缩进大小
indent_size : {正整数} | tab

# 单个制表位字符的宽度
tab_width : {正整数}

# 行尾文件格式
end_of_line : lf | crlf | cr

# 文件字符编码
charset : latin1 | utf-8 | utf-16be | utf-16le | utf-8-bom

# 是否从行尾删除空格
trim_trailing_whitespace : true | false

# 指定的字符数之后强制换行
max_line_length : {正整数} | off

#文件末尾添加一个空行
insert_final_newline : true | false
```

## 特定领域属性(特定领域建议使用Prettier配置)

```sh
# 字符串文字的首选引用样式, single - 单引号、double-双引号 、auto - 自适应
quote_type : single | double | auto

# 表示大括号的左边部分是否应该在下一行
curly_bracket_next_line : true | false

# 运算符前后是否留空格
spaces_around_operators : true | false | hybrid

# 表示括号和圆括号周围应该如何空格：没有空格，只有在括号内，只有在括号外，或者在括号的两侧
spaces_around_brackets : none, inside, outside,both

```
