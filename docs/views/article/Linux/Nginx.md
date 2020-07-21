---
title: Nginx 服务器端配置
date: 2019-05-12
categories:
 - Nginx
tags:
 - Nging
 - Linux
---

这是一篇关于 Nginx 服务器端配置的记录

## nginx 安装（centOS 7）并配置服务

### 添加 yum 源

``` bash
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

### 安装

``` bash
yum install nginx
```

### 打开防火墙端口并重启

``` bash
firewall-cmd --zone=public --permanent --add-service=http
firewall-cmd --reload
```

### 查看防火墙打开的所有服务

``` bash
firewall-cmd --list-service
```

### 查看当前打开的端口

``` bash
firewall-cmd --zone=public --list-ports
```

### 打开指定端口

``` bash
firewall-cmd --zone=public --add-port=80/tcp
# (永久生效再加上 --permanent)
```

::: tip
–zone 作用域

–add-port=8080/tcp 添加端口，格式为：端口/通讯协议

–permanent #永久生效，没有此参数重启后失效
:::

## 解决 nginx 403 错误问题

第一种情况： 在你的 nginx 配置文件下的 root 字段的路径下没有找到 index.html

第二种情况： 没有用 root 用户运行，导致权限不足，也可以通过将文件夹权限提升再试

## nginx部署前端SPA应用实践

### nginx location 匹配规则

- ~ 波浪线表示执行一个正则匹配，区分大小写
- ~* 表示执行一个正则匹配，不区分大小写
- ^~ 表示普通字符匹配，如果该选项匹配，只匹配该选项，不匹配别的选项，一般用来匹配目录
- = 进行普通字符精确匹配
- @ 定义一个命名的 location，使用在内部定向时，例如 error_page, try_files

### browserHistory 模式的刷新问题

browserHistory 路由模式下，使用history api可以在前端进行页面跳转，但是刷新的话，就需要对链接进行一个修复（重定向）
可以使用 nginx 的 `try_files`

``` conf
location / {
        root   /root/deploy/shenyang_military_general_app;
        index  index.html index.htm;
      	try_files $uri $uri/ /index.html;
}
```

## 开启 gzip 压缩

``` conf
gzip  on;
gzip_types    text/plain application/javascript application/x-javascript text/javascript text/xml text/css;
```

配置gzip_static

``` conf
gzip_static on;
```