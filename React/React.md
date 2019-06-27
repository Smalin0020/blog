![react](./img/react/react.png)

# 【译】五分钟学习 React - 入门教程

让我们用几分钟来了解一下这个受欢迎的 JavaScript 库吧

这是一个讲解如何构建一个简单 react 应用的教程，我不会把我认为不是核心的内容讲解出来

如果你更有兴趣，并且想学习更多的话，你可以看看我们的[免费 react 教程](https://scrimba.com/g/glearnreact)在 [Scrimba](https://scrimba.com/) 上

但是现在，让我们把焦点聚集在基础上吧！

## 准备

让我们开始使用 React，你必须使用最简单的设置：在 HTML 文件中使用标签引入 `React` 和 `ReactDOM` 库

看起来像是这样：

``` html
<html>
<head>
<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
    
    /* 
      添加 React 代码
    */
    
    </script>
</body>
</html>
```

我们也可以引入 Babel，并且 React 可以使用一些类似 JSX 语法去书写标记，我们需要转换这个 JSX 语法到原生 JavaScript，所以浏览器才能理解它

这里有两个点需要注意一下：

1. 这个 `<div>` 的 id 使用了 `#root`。这是我们应用的入口点。也是我们整个应用的声明。
2. 这个 `<script type="text/babel">` 标签在 body 里，这里是我们写 react 代码的地方。

如果你想要实验这个代码的话，可以试试在线编写[本例代码](https://scrimba.com/c/cmGe8Cp)

## 组件

每一个 React 都是一个组件，并且他们通常来自 JavaScript 类(classes)。你可以创建一个组件在 `React-Component` 类中扩展，让我们创建一个类名为 `hello` 的组件调用：

``` js
class Hello extends React.Component {
    render() {
        return <h1>Hello world!</h1>;
    }
}
```

你之后在这个组件里定义的方法，在我们的例子中，我们有且只有一个，并且调用 `render()` 方法

在 `render()` 内部，你必须返回一个你想要让 React 在界面上渲染什么的一个描述信息。在以上代码中，我们简单的想要 React 去显示一个 `h1` 标签，并且里面是 Hello world! 文本

显示我们的渲染结果，我们可以使用一个 `ReactDOM.render()`：

``` js
ReactDOM.render(
    <Hello />, 
    document.getElementById("root")
);
```

我们连接到刚刚我们写的 `hello` 组件上通过入口点去渲染的应用(`<div id="root"></div>`)