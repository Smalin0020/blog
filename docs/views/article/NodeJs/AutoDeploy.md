---
title: 自己编写一个基于 nodejs 的自动化部署工具
date: 2019-05-27
categories:
 - NodeJs
tags:
 - 自动化
 - Linux
 - git
 - jenkins
---

[[toc]]
:blush: 这次自己写了一个基于 nodejs 的自动化部署的工具，因为之前在用 jenkins 由于 jenkins 比较强大，而且比较笨重，对于我来说只是用来部署一个前端 application 而已，所以没必要用这样比较完善的工具，毕竟服务器资源有限。。

:yum: 附上一个之前写的文章
<a :href="`${ deployURL }views/article/Linux/Jenkins.html`">gitee + webhooks + jenkins 实现自动化部署</a>
<!-- [gitee + webhooks + jenkins 实现自动化部署](<div></div>) -->

原理与 jenkins 类似，也是受益于 jenkins 的启发，自己写了一个 nodejs 部署工具

::: tip
- 本次仓库环境是 gitee ，但是只要有 webhooks 就都可以部署
- gitlab 有自己的 [gitlab CI](https://docs.gitlab.com/ee/ci/) 很不错的
- github 也有 [travis-ci](https://travis-ci.org/) 等等开源自动化部署工具
:::
## nodejs 所需的核心库

:upside_down_face: 由于本人比较懒，用了 [koa](https://koa.bootcss.com/)
``` js
// koa
const Koa = require('koa');
// koa-router
const Router = require('koa-router');
// 实例化 koa
const app = new Koa();
// 实例化 koa-router
const router = new Router();
// 是 child process 的封装
const shell = require('shelljs');
// 基于 nodejs 实现的自动发邮件
const nodemailer = require('nodemailer');
// get response body lib
const bodyParser = require('koa-bodyparser');
// 邮件配置
let transporter = nodemailer.createTransport({
  host: 'smtp.exmail.qq.com',
  port: 465, // SMTP 端口
  secureConnection: true, // 使用了 SSL
  auth: {
    user: '你要发送 email 的地址',
    // smtp授权码
    pass: '授权码，不是密码',
  }
});
```
## 动手写 core code
然后开始写自动部署的接口

``` js
router.post('/deploy-application', (ctx, next) => {
  // 设置跨域
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = {
    message: 'ok',
    status: 200,
    data: {
      test: 'success'
    }
  }
})
```
- 接口可以通了，这次可以开始写 core code 了
- 首先拿到 webhooks 发送的 post 请求的参数
- 将分支单独拿出来，毕竟一个仓库好几个分支呢
``` js
const requestBranch = ctx.request.body.ref
const requestBranchLength = ctx.request.body.ref.lastIndexOf('/') + 1
const branch = requestBranch.slice(requestBranchLength)
```

- 分支取到之后，可以进行判断了，先用开发分支来进行操作

``` js
if (branch === 'develop') {
  // 开发环境部署
  ctx.body = 'ok'
  shell.exec('yarn run deploy')
}
```
- 然后用 shell js 执行一个 `.sh` 文件

``` bash
# 确保抛错
set -e

REF="你的 git 仓库地址"
FOLDER="clone 远程仓库下来的文件夹位置"
DEPLOY_FOLDER="你要部署到服务器的文件夹位置"

rm -rf ${FOLDER}

git clone -b develop ${REF} ${FOLDER}

cd ${FOLDER}

yarn install

yarn run build:develop

rm -rf ${DEPLOY_FOLDER}

cp -R ${FOLDER}dist/${DEPLOY_FOLDER}
```
## 邮件配置
- 最后配置一下邮件系统（可选）

``` js
let mailOptions = {
  from: '"你的邮件" <你的邮件>', // sender address
  to: '要接受人的邮件', // list of receivers
  subject: '【项目】部署邮件', // Subject line
  html: '<b>项目已经部署至<a href="http://xxxx">http://xxx</a></b>' // html body
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
```

- 最后启动一下子服务器
- http://server.com:3000

``` js
app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000);
```

## WebHooks 配置

可以去参考一下
<a :href="`${ deployURL }views/article/Linux/Jenkins.html#%E9%85%8D%E7%BD%AE-webhooks`">gitee + WebHooks + jenkins 实现自动化部署，配置 WebHooks</a>

<script>
import { deployURL } from '../../config'
export default {
  name: 'MacTools',
  data () {
    return {
      deployURL
    }
  }
}

</script>