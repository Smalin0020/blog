# CORS 跨域

整理一下跨域相关的学习资料

## 什么是同源策略？

`同源`是浏览器的一种机制，如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。

## 访问限制

在非`同源`情况下，是无法请求的，举个例子。 `www.abc.com` 发送一个请求到 `www.abcd.com` 时，浏览器是会报出一个错误问题的 

<span style="color: red"> No 'Access-Control-Allow-Origin' header is present on the requested resource. </span>

## 简单请求

某些请求不会触发 CORS 预检请求。本文称这样的请求为“简单请求”，请注意，该术语并不属于 Fetch （其中定义了 CORS）规范。若请求满足所有下述条件，则该请求可视为“简单请求”：

- 使用下列方法之一

1. GET
2. HEAD
3. POST

