<!-- ---
title: 如何隐藏界面滚动条？
date: 2017-12-28
categories:
 - frontEnd
tags:
 - HTML CSS
---

## 前言

相信大家在做项目的时候肯定是遇到过需要隐藏滚动条的需求，为了更加美观，不同的浏览器的滚动条的样式是不一致的，所以有的需求是隐藏滚动条，而有的是将所有浏览器的滚动条的样式改为一致，今天就来说说如何简单的实现界面的滚动条隐藏功能。

## 实现方式

简单说一下我的实现方式，首先在布局的时候，肯定是使用`div`或者`Html5`的新标签来创建容器，那么这个容器的大小通常是需要我们自己定义的，当然你也可以不定义大小，这都无所谓，定义好父容器后，你也肯定是需要一个或多个子容器来书写内部结构，这个方式就是通过子容器宽度超过父容器，来实现看似滚动子容器，实则滚动父容器的方式。

## code

- 先上一段代码

``` html{0}
<!DOCTYPE html>
<html>
<head>
  <title>
    隐藏滚动条
  </title>
</head>
<body>
  <div class="main-container">
    <div class="child-container"></div>
  </div>
</body>
</html>
```

- 好的，现在整体架子出来了，下一步我们来给它添加点色彩，多复制一些子容器来进行模拟数据填充，并且使用flex布局美化一下，方便我们去查看效果，先上css代码，在上个效果图

``` css{0}
.main-container {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      background-color: aquamarine
    }
    .child-container {
      width: 200px;
      height: 200px;
      background-color: beige;
      margin: 5px;
    }
```

- 效果如下：

![效果图](./img/hiddenScroll1.gif)

- 嗯，不错！滚动条出现了，样子看起来也蛮好看的，顺便还实现了响应布局，Flex大法好啊！ -->