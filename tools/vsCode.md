# 个人vsCode配置记录

## 配置文件

``` json
// 将设置放入此文件中以覆盖默认设置
{
  // 显示垂直标尺的列
  "editor.rulers": [],
  "editor.fontSize": 14,
  "workbench.colorTheme": "Monokai",
  "workbench.iconTheme": "vs-seti",
  // "editor.fontFamily": "PrestigeEliteStd-Bd",
  "editor.fontFamily": "Monaco",
  // 允许在任何文件中设置断点
  "debug.allowBreakpointsEverywhere": true,
  // 控制工作台底部状态栏的可见性。
  "workbench.statusBar.visible": true,
  // 控制概述标尺周围是否要绘制边框。
  "editor.overviewRulerBorder": false,
  "workbench.editor.tabCloseButton": "right",
  "editor.renderIndentGuides": false,
  "window.zoomLevel": 0,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "workbench.panel.location": "bottom",
  "workbench.editor.showTabs": false,
  "explorer.confirmDelete": false,
  // "editor.cursorStyle": "block",
  // "editor.matchBrackets": false,
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "editor.smoothScrolling": true,
   // 控制折行方式。可以选择:
  //  - "off" (禁用折行)，
  //  - "on" (根据视区宽度折行)，
  //  - "wordWrapColumn" (在 "editor.wordWrapColumn" 处换行)
  //  - "bounded" (在视区宽度和 "editor.wordWrapColumn" 两者的较小者处换行)。
  "editor.wordWrap": "on",
  // 控制是否在搜索中跟踪符号链接。
  "search.followSymlinks": false,
  "workbench.settings.settingsSearchTocBehavior": "show",
  "workbench.editor.enablePreview": false,
  // 以像素为单位控制字号。
  "editor.fontSize": 15,
  "editor.cursorBlinking": "solid",
  "workbench.activityBar.visible": false,
  // 保存时，自动保存成ESLint语法
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
      "javascript",{
          "language": "vue",
          "autoFix": true
      },"html",
      "vue"
  ],
}
```

## 插件

- 中文插件

### `Chinese (Simplified) Language Pack for Visual Studio Code`

- 变量起名神器

### `Codelf`

- 自动将px转换成rem单位

### `cssrem`

![cssrem](./img/cssrem.gif)

- 将相同的括号换成对应的颜色

### `Bracket Pair Colorizer`

![cssrem](./img/example.png)

- 调试器，类似谷歌开发者工具，可以在vscode中调试js代码

### `Debugger for Chrome`

- ESLint 语法校验

### `ESLint`

- Vetur，Vue开发者必备

### `Vetur`