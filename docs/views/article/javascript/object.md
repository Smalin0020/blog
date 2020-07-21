---
title: Object
date: 2019-06-27
categories:
 - JavaScript
tags:
 - JavaScript
---

## Constructor

保存着用于创建当前对象的函数。`new Object()`构造函数（constructor）就是Object()

## hasOwnProperty(propertyName)

用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。

## isPrototypeOf(object)

用于检查传入的对象是否是另一个对象的原型。

## propertyIsEnumerable(propertyName)

用于检查给定的属性是否能够使用for-in语句来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。

## toLocaleString()

返回对象的字符串表示，该字符串与执行环境的地区对应。

## toString()

返回对象的字符串表示。

## valueOf()

返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值

## Object.defineProperty()

`Object` 的高级用法，Vue 2.X 的数据双向绑定，就是以这个方法来定义的。

一般接收三个参数(obj, key, config)

1. obj: 要设置的对象实例
2. key: 要设置对象实例下的字段名 `key`
3. config: 一般以对象形式书写，有以下3个参数还有2个与其互斥的参数 `get set`

(1)`configurable`: 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。对于直接在对象上定义的属性，这个特性的默认值为true。

(2)`enumerable`: 表示能否通过for-in循环返回属性。对于直接在对象上定义的属性，这个特性的默认值为true。

(3)`writable`: 是否可写，默认为 `true`

#### 互斥参数

(1)`get`: 在读取属性时调用的函数。默认值为undefined。

(2)`set`: 在写入属性时调用的函数。默认值为undefined。

如下
``` js
var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    enumerable: true,
    writable: true,
    value: "Smalin"
});

alert(person.name);    //"Smalin"
delete person.name;
alert(person.name);    //"Smalin"
```