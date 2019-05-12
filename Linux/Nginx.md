# Nginx 服务器端配置

这是一篇关于 Nginx 服务器端配置的记录

## nginx 安装（centOS 7）并配置服务

### 添加 yum 源

```
rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```

### 安装

```
yum install nginx
```

### 打开防火墙端口并重启

```
firewall-cmd --zone=public --permanent --add-service=http
firewall-cmd --reload
```

### 查看防火墙打开的所有服务

```
firewall-cmd --list-service
```

### 查看当前打开的端口

```
firewall-cmd --zone=public --list-ports
```

### 打开指定端口

```
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