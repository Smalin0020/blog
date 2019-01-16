# Web前端开发面试记录

## 2018年7月10日上午面试
### 1.```<img>```的title和alt有什么区别？
### 2.描述常见的HTTP状态码和HTTP方法
### 3.IE与火狐的事件机制有什么区别？什么是事件冒泡？如何阻止冒泡？
### 4.在浏览器地址栏中输入一个URL后回车，背后会进行哪些技术步骤？
### 5.如何实现一个JS对象的深度克隆？
### 6.请简单描述Vue双向绑定底层实现原理，常用到的指令及Vue实例的生命周期
### 7.编程实现获取URL中的参数：
#### a）指定参数名称，返回该参数的值或者空字符串;
#### b）不指定参数名称，返回全部的参数对象或者{};
#### c）如果存在多个同名参数，则返回数组;
``` js{0}
function getUrlParam(url, key){

};
```
### 8.给出两个单词word1和word2，找出将word1转换成word2所使用的最少的步骤数（每个操作记为一步）。你可以对一个单词进行以下三种操作：
#### a）插入一个字符;
#### b）删除一个字符;
#### c）替换一个字符;
``` js{0}
function minDistance(word1, word2){
    
};
```
***
## 2018年7月11日下午面试
### 1.HTTP request报文结构是怎样的？
### 2.如何进行网站性能优化，请简述。
### 3.HTTP状态码及其含义？
### 4.display: none;与visibility: hidden;的区别？
### 5.如何判断一个对象是否为函数？
### 6.如何分别水平、垂直居中一个元素？
### 7.什么是web语义化？html5有哪些语义化标签？语义化有什么好处？
### 8.以下程序输出结果是？
``` js{0}
function fn(a) {
	console.log(a);
	var a = 2;
	function a() {};
	console.log(a);
}
fn(1);
```
### 9.以下程序输出结果是？
``` js{0}
var a = 10;
a.pro = 10;
console.log(a.pro + a);
var s = 'hello';
s.pro = 'world';
console.log(s.pro + s);
```
### 10.写出几种js跳转的常见方式？
### 11.写出输出结果
``` js{0}
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof undefined);
```
### 12.写出输出结果？
``` js{0}
function printing() {
	console.log(1);
	setTimeout(function() {
		console.log(2);
	}, 1000);
	setTimeout(function() {
		console.log(3);
	}, 0);
	console.log(4);
}
printing();
```
### 13.写出客户端存储localStorage和sessionStorage的set、get方法，localStorage和sessionStorage有何区别？
### 14.通过JS获取页面尺寸、屏幕的方法？
### 15.列举JS实现跨域的几种方式？
### 16.列举几种立即执行函数的实现方式。
### 17```var numberArray = [3, 6, 2, 4, 1, 5];```
#### 1）实现对该数组的倒排，输出[5, 1, 4, 2, 6, 3]
#### 2）实现对该数组的的将序排列，输出[6, 5, 4, 3, 2, 1];
### 18.编写一个方法，去掉一个数组的重复元素
### 19.写一个简单的ajax示例
### 20.JavaScript有哪些方法定义对象？
---