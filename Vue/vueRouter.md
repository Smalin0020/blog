# 路由守卫的那些事儿

最近在开发项目的时候，发现同事有需求是点击浏览器的返回，或者直接点击其他菜单跳走的时候，需求是想提醒一下用户，是否保存当前所编写的内容，当用户确定后，在去执行对应的跳转。

还有一个就是全局的对路由进行控制，一般都会写成 `window.location.href` 这种格式去阻止，或者重新对路由进行控制的问题，所以想写一篇文章总结一下

虽然 vue 的路由控制都是基于 `HTML5 History API` 的，但是在写项目的时候，还是比较推荐使用 vue 官方推荐的 vue-router 相关的技术

## 全局守卫

你可以使用 router.beforeEach 注册一个全局前置守卫：

例如你的项目结构是

```
roter /
|- index.js
```

你可以在你当前项目中的 router => index.js 中写入以下代码

``` js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

1. `to`: 是指路由下一步将要去的位置对象
2. `from`: 路由来自哪里的位置对象
3. `next`: 你的路由守卫中必须包含的一个函数，如果不执行 `next()` ，将会出现不可预测的问题

## 组件内的路由守卫

有三种组件内的守卫

- `beforeRouteEnter`
- `beforeRouteUpdate`  (2.2 新增)
- `beforeRouteLeave`

主要说一下 `beforeRouteLeave` 这个，因为在项目中或许会经常用到的一个方法

`beforeRouteLeave` 是一个在当前路由，突然离开时触发的一个方法，例如当前你正在一个编辑界面，用户不小心点击了浏览器的返回，亦或者点击了菜单栏中其他菜单的导航，会执行该方法，

`beforeRouteLeave` 也拥有3个参数，与全局路由守卫的参数是一致的

``` js
beforeRouteLeave (to, from, next) => {
  // 写入你想对用户说的内容
  // 务必保证 next 方法是被触发的
}
```

举个🌰

``` js
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('你确定放弃当前编辑的界面并且离开吗？')
  if (answer) {
    next() // 执行默认操作，点击哪里去哪里
  } else {
    next(false) // 终止操作，不执行路由跳转
  }
}
```
::: warning 注意
beforeRouteLeave 只能在当前组件路由切换时才能去触发，不能写在当前界面下的子组件内
:::

好了，🌰吃完了。

这是我在项目中遇到到的问题以及总结，当然更推荐你去[官方](https://router.vuejs.org/zh/)系统的去查看对应的教程

