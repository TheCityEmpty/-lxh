# life-record

vite+vue3+less+eslint

# eslint

```bash
yarn add --dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
```

在根目录新建 `.eslintrc.js` , `prettier.config.js` 两个文件。

此时其实 eslint 和 prettier 还有冲突， 再新建一个文件 `.eslintrc` 。此时风格问题由 prettier 全部接管。

当然此时你的vscode settings.json 应该设置为 下面：
```json
{
  "workbench.colorTheme": "Atom One Dark",
    "editor.fontSize": 13,
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html",
        "javascript": "javascriptreact"
    },
    "vetur.validation.template": false,
    "git.ignoreMissingGitWarning": true,
    "emmet.triggerExpansionOnTab": true,
    "files.autoGuessEncoding": false,
    "workbench.startupEditor": "welcomePage",
    "editor.tabSize": 4,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        "language": "html",
        "autoFix": true
      },
      {
        "language": "vue",
        "autoFix": true
      }
    ],
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "prettier.tabWidth": 4,
    "vetur.format.options.tabSize": 4,
    "[vue]": {
      "editor.defaultFormatter": "octref.vetur"
    },
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    },
    "stylelint.syntax": "less",
    "eslint.codeAction.showDocumentation": {
      "enable": true
    },
    "files.associations": {
      "*.cjson": "jsonc",
      "*.wxss": "css",
      "*.wxs": "javascript",
      "*.wxc": "wxml"
    },
    "emmet.includeLanguages": {
      "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "terminal.integrated.tabs.enabled": true
}
```