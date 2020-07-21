---
title: git commit 代码规范
date: 2020-07-04
categories:
 - git
tags:
 - git
---

## 规范

目前社区有很多的 commit 规范，目前使用最广的写法，比较合理和系统化，并且有配套的工具。采用 [angular 规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)

## git commit 规范作用

可以通过 `log` 一目了然的查看当前提交信息，修复、新特性、代码格式整理等等

``` shell
git log <last tag> HEAD --pretty=format:%s
```

![log](./image/commit-1.jpg)

## type 类型

`type` 用于说明 commit 的类别，只允许使用下面7个标识。

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

::: warning
注意
`style` 格式的 commit type 不是对样式代码的更改，而是代码风格结构的变更（不影响代码运行的变动）
:::

## 生成 change log

如果你的所有 Commit 都符合 Angular 格式，那么发布新版本时， Change log 就可以用脚本自动生成

[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) 就是生成 Change log 的工具，运行下面的命令即可。

``` shell
$ npm install -g conventional-changelog
$ cd my-project
$ conventional-changelog -p angular -i CHANGELOG.md -w
```