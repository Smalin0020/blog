---
title: Element UI 开发总结
date: 2019-01-16
categories:
 - Vue
tags:
 - Element
 - Vue
 - JavaScript
---

### 这篇文章是在我日常的开发中，使用 Vue + Element UI 出现的一些问题以及解决方案的汇总

## 如何在组件中嵌套输入框

1. 首先需要引入 element ui 中的table组件 (废话)

``` html{0}
<el-table :data="tableData">
    <el-table-column prop="data">
    </el-table-column>
</el-table>
```

2. 然后在 `el-table-column` 中嵌入template组件，将表格变成可编辑状态

``` html{0}
<el-table :data="tableData">
    <el-table-column prop="data">
        <template slot-scope="scope">
        </template>
    </el-table-column>
</el-table>
```

3. 最后在自定义的template组件中加入 `el-input` 组件，主要是在 `class` 上赋予element ui的样式 `edit-input`，来进行样式绑定

``` html{0}
<el-table :data="tableData">
    <el-table-column prop="data">
        <template slot-scope="scope">
            <el-input class="edit-input"placeholder="请输入input内容" v-model="input"></el-input>
        </template>
    </el-table-column>
</el-table>
```

4. 当然你也可以定义任何在element ui上的样式，举个栗子，加入文本输入域，show code!

``` html{0}
<el-table :data="tableData">
    <el-table-column prop="data">
        <template slot-scope="scope">
            <el-input class="edit-input" :rows="4" placeholder="请输入文本域的内容" type="textarea" v-model="textarea"></el-input>
        </template>
    </el-table-column>
</el-table>
```
- 可以定义 `type="textarea"` 和 `:rows="4"` 来确定具体的样式

### 参考

- 具体自定义可以观看github的源码以及实例等内容

[github](https://github.com/PanJiaChen/vue-element-admin)

[实例](http://panjiachen.github.io/vue-element-admin)

## 在 Element UI 中一些事件失效的问题

因为 Element UI 是一套封装好的组件，有一些 Vue 原生的监听事件无法被触发，举个栗子：

``` html
<el-input
    @keyup.enter="searchResult"
    v-model="searchContent.workNumber"
    size="mini"
    placeholder="请输入工号">
</el-input>
<!-- enter 不触发 searchResult 事件 -->
```
上面的代码看起来没有什么问题，一个简单的输入框搜索的功能，当你敲下 **Enter** 键的时候，就会触发 `searchResult` 这个方法，但是当我这么写的时候，是不会触发`searchResult` 这个方法的，原因就在于 Element UI 在封装的时候，有一些 Vue 原生的监听事件无法被触发。
如果在原生的 ` input ` 输入框下，当你按下 **enter** 键的时候，就会触发 ` searchResult ` 这个方法，像下面这么写

``` html
<input
    type="text"
    @keyup.enter="searchResult"
    v-model="searchContent.workNumber"
    placeholder="请输入工号" />
<!-- enter 触发 searchResult 事件 -->
```

解决办法：

在 `@keyup.enter="searchResult"` 中加入 `.native` 覆盖原有封装的事件即可

``` html
<el-input
    @keyup.enter.native="searchResult"
    v-model="searchContent.workNumber"
    size="mini"
    placeholder="请输入工号">
</el-input>
<!-- enter 触发 searchResult 事件 -->
```