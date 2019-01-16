# JavaScript DOM 学习笔记

最近开发原生和 jQuery 的项目，着实让我很急，秉着 github 放弃的项目，并且写 (bu) 原 (hui) 生 (xie)  js  (jQuery) ，可以提高自身的能力，虽然项目引用了 jQuery ，但是还是坚持用原生去写的，以下是我总结的一些方法，方便日后温习

一下顺序不分先后，想到哪里写哪里，麻麻再也不用担心我的学习！ :tada: :100:

## item

在访问元素内容时，例如 `document.getElementsByClassName('some-class')` 会返回文档中当前所有类名为 `some-class` ，例如有三个元素使用了这个类名，但是我想取其中一个，大部分都是使用 `document.getElementsByClassName('some-class')[1]` 这样去访问，类似于数组形式。也颇受大部分开发者的喜爱，其实这样使用也不错。但是有个内置的方法为 `item()` ，可以使用，例如 `document.getElementsByClassName('some-class').item(1)` ，也是访问的第二个类名为 `some-class` 元素的。

当浏览器遇到 `document.getElementsByClassName('some-class')[1]` 时，其实会自动将它转换为 `document.getElementsByClassName('some-class').item(1)` 的，个人也比较喜欢 `item()` 这个方法

## insertAdjacentElement

在插入元素时，发现一个好玩，方便，快捷的插入 `DOM` 的方法，不用像之前创建元素，添加文本节点，在添加到元素上，元素在添加到文档中，我说的时候就感觉好麻烦，下面这个方法它不呀，它直接把你的 `html` 的字符串拿来识别插进去

::: tip 语法
element.insertAdjacentElement(position, element)
:::

- **position：**
    > `beforebegin`: 在该元素本身的前面 

    > `afterbegin`: 只在该元素当中, 在该元素第一个子孩子前面

    > `beforeend`: 只在该元素当中, 在该元素最后一个子孩子后面

    > `afterend`: afterend在该元素本身的后面

**element：**

> 要插入到树中的元素

还有一个更加快捷的方式，但是这个方式只适用于完全重写元素下的内容，而不是简单的插入，目前被纳入 `html5` 标准规范当中

`element.innerHTML(html)`

`html` 为 `HTML` 字符串格式，格式如下

``` 
`<ul>
    <li> item 1 </li>
    <li> item 2 </li>
    <li> item 3 </li>
</ul>`
```

可以将 `ul` 直接覆盖原有的元素，插入到文档当中
 
## querySelector

选择元素，可以取代 `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()` 等，`IE` 最低为 `IE 8` 哦，要兼容 `IE` 的小伙伴注意啦！

::: tip 语法
element = document.querySelector(selectors)
:::

#### 获取 id 

`document.querySelector('#id')`

#### 获取 class

`document.querySelector('.class')`

#### 获取 tag

`document.querySelector('tagName')`

#### demo

这里, 一个class属性为"user-panel main"的div元素`<div>(<div class="user-panel main">)`内包含一个name属性为"login"的input元素`<input> (<input name="login"/>)` ，如何选择，如下所示:

``` js
let element = document.querySelector("div.user-panel.main input[name='login']");
```

## querySelectorAll

选择所有符合条件的元素，选择类型与 `querySelector` 的一致，都是 `css` 选择器。返回一个 `NodeList` ，可以通过 `[0]` 或者 `item(0)` 来访问任何一个元素

::: tip 语法
element = document.querySelector('.class')
:::

#### 获取 id

`document.querySelectorAll('#container')`

::: warning 不推荐
获取文档中 `id` 为 `container` 的所有元素，`id` 应该为文档中唯一，固不推荐此方法选择 `id` 属性
:::

#### 获取 class

`document.querySelectorAll('.class')`

获取文档中类名为 `class` 的所有元素

#### 获取 tag

`document.querySelectorAll('div')`

获取文档中所有 `div` 元素