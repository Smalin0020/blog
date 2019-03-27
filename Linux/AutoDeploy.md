# gitee + webhooks + jenkins 实现自动化部署

作为一名前端开发扫地僧，得折腾。通过 `push` `pull request` 等操作，直接自动化部署到服务器，之后再发送邮件，这样的逼格岂不是提升了些许。。

## 自动部署大致原理

- 通过 `push` 推送代码
- `webhooks` 自动发送请求到 `jenkins`
- `jenkins` 接受到请求后，开始自动构建
- `jenkins` 构建完成后执行`shell`脚本来自动部署 => 自动触发邮件
- 实现代码自动化部署与自动发送邮件配置

## 安装 `jenkins`

