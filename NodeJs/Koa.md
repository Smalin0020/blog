# Koa 

## API

Context 具体方法和访问器.

### ctx.req

Node 的 request 对象.

### ctx.res

Node 的 response 对象.

绕过 Koa 的 response 处理是 **不被支持的.** 应避免使用以下 node 属性：
- res.statusCode
- res.writeHead()
- res.write()
- res.end()

### ctx.request

koa 的 Request 对象.

### ctx.response

koa 的 Response 对象.

### ctx.state

推荐的命名空间，用于通过中间件传递信息和你的前端视图。

```
ctx.state.user = await User.find(id);
```