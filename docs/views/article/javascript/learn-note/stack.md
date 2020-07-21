---
title: 学习笔记之《栈》
date: 2020-07-11
categories:
 - JavaScript
tags:
 - JavaScript
 - 算法
 - 数据结构
---

## 栈的概念

**栈**是一种数据结构，它遵从**后进先出**（LIFO）的原则，新添加的元素将进入栈的顶部，称为**栈顶**。而另一端称为**栈底**。

在现实生活中有很多栈的例子，例如一摞书。

## 通过数组简单实现一个栈

在 JavaScript 中，可以使用数组来轻松模拟栈

简单实现，例如：

``` js
const stack = [] // 空栈

// 推入元素到栈中
stack.push('Smalin')
stack.push('DingLin')

// 移除一个元素
stack.pop()

// 后进先出原则
console.log(stack) // ['Smalin']
```

## 通过类实现一个栈

可以创建一个类来封装栈

``` js
class Stack {
  // 初始化一个栈
  constructor () {
    this.items = []
  }

  // 向栈中添加一个元素
  push () {
    // 支持多个元素同时添加
    const args = Array.prototype.slice.call(arguments, 0)
    const len = args.length
    let i = 0
    while (i < len) {
      this.items.push(args[i])
      i++
    }
  }
  // 移除一个元素
  pop () {
    this.items.pop()
  }
  // 返回栈顶元素，不做任何修改
  top () {
    const len = this.items.length
    return this.items[len - 1]
  }
  // 返回栈底元素，不做任何修改
  bottom () {
    return this.items[0]
  }
  // 查看栈中是否为空，空返回 true ，否则返回 false
  isEmpty () {
    return this.items.length === 0
  }
  // 清除栈的所有元素
  clear () {
    this.items = []
  }
  // 查看当前栈中的元素数量
  size () {
    return this.items.length
  }
}
```

一个栈的类就声明完成了，接下来我们试试这个栈

``` js
// 初始化一个 Stack 类
const stack = new Stack()

stack.push('Smalin', 'DingLin') // 往栈添加元素

stack.top() // 查看栈顶元素 => Smalin

stack.bottom() // 查看栈底元素 => Smalin

stack.isEmpty() // 查看元素是否为空 => false

stack.size() // 查看栈中元素个数 => 2

stack.pop() // 删除栈顶元素
console.log(stack.size()) // 1

stack.clear()
console.log(stack.size()) // 0
```

栈的所有功能都尝试了一遍没什么问题，但是创建的这个栈的类还是有一些问题的，我们知道 ES6 的类是基于原型的，但是我们的变量并不是私有化的。外部还是可以不通过我们定义的 API 对栈来进行操作，例如：

``` js
const stack = new Stack()

stack.push('Smalin', 'DingLin')

console.log(stack.bottom()) // Smalin
stack.items[0] = 'DingLin'

console.log(stack.bottom()) // DingLin
stack.items = []
console.log(stack.isEmpty()) // true
```

可以看到，这样是可以随意操作栈中的数据的，并且没有任何的限制，最简单的变量私有化就是[闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)了。

## 用闭包来封装类

代码如下：

``` js
const Stack = (function () {
  const items = []
  class Stack {
    constructor () {}

    // 向栈中添加一个元素
    push () {
      // 支持多个元素同时添加
      const args = Array.prototype.slice.call(arguments, 0)
      const len = args.length
      let i = 0
      while (i < len) {
        items.push(args[i])
        i++
      }
    }
    // 移除一个元素
    pop () {
      items.pop()
    }
    // 返回栈顶元素，不做任何修改
    top () {
      const len = items.length
      return items[len - 1]
    }
    // 返回栈底元素，不做任何修改
    bottom () {
      return items[0]
    }
    // 查看栈中是否为空，空返回 true ，否则返回 false
    isEmpty () {
      return items.length === 0
    }
    // 清除栈的所有元素
    clear () {
      items = []
    }
    // 查看当前栈中的元素数量
    size () {
      return items.length
    }
  }

  // 当 Stack 被调用时，返回一个 Stack 类的实例
  return Stack
})()
```

这样定义一个类后，除了我们定义的 API 之外是无法访问到内部的栈变量的。
