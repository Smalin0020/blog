# Array

## 创建数组的两种形式

1. 实例化创建

``` js
let array = new Array()
```

省略 `new` 也可以

``` js
let array = Array()
```

2. 字面量创建

``` js
let array = []
```
::: warning 最好不要这样做
let array = new Array(,,,)

或者

let array = [,,,]

因为在 IE 浏览器中，会导致数组的项数不一致，在 IE 中有可能是4项，而在主流浏览器中为3项
:::

## length 属性

数组的项数保存在 length 属性中，数组的 length 属性很有特点——它不是只读的。可以通过修改 length 属性来对数组进行项数更改！