# String

## length

每个字符串都有一个 `length` 属性

```js 
var stringValue = "hello world";
alert(stringValue.length);     //"11"
```

## 字符方法

两个用于访问字符串中特定字符的方法是：`charAt()` 和 `charCodeAt()`。这两个方法都接收一个参数，即基于0的字符位置。其中，`charAt()` 方法以单字符字符串的形式返回给定位置的那个字符（ECMAScript中没有字符类型）。
例如：

```js 
var stringValue = "hello world";
alert(stringValue.charAt(1));   //"e"
```

字符串"hello world"位置1处的字符是"e"，因此调用charAt(1)就返回了"e"。如果你想得到的不是字符而是字符编码，那么就要像下面这样使用charCodeAt()了。

``` js
var stringValue = "hello world";
alert(stringValue.charCodeAt(1));   //输出"101"
```

## 字符串操作方法

### concat()

用于连接2个字符串

``` js
var stringValue = "hello ";
var result = stringValue.concat("world");
alert(result);             //"hello world"
alert(stringValue);        //"hello"
```

### slice()

### substr()

### substring()