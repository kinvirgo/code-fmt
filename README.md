# code-fmt

代码格式

## 使用

### 第一步: 安装 husky、lint-staged、prettier 依赖

```sh
yarn add husky lint-staged prettier eslint -D
```

### 第二步: 添加 script 脚本

```json
{
    "scripts": {
        "prepare": "husky install",
        "prettier": "prettier --write ."
    }
}
```

### 第三步: 添加 git hooks

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

添加结果(.husky/pre-commit)文件

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```
