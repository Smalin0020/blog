# Vue 使用小技巧

## watch

在日常使用 `watch` 监听数据时，会很多种情况会出现当 `vue` 组件被初始化时，立即执行一个函数去调取后端返回的列表等，并且通过筛选条件来每次都去调用接口

``` js

watch: {
  someWatchData: {
        handler: 'someFunction', // 需要执行的函数
        immediate: true, // 是否在初始化时，立即执行
        deep: true // 是否开启深度监听
      }
}

```

## methods

在使用第三方 UI 库时，或者使用 Vue 的绑定事件等等，通常只有一个回调函数，如果想将自己需要的参数加入进来怎么办呢？

``` vue{5}
<template>
  <input
    type="text"
    v-for="(item, index) in items"
    @change="value => changeInput(value, index)">
  </input>
</template>

<script>
  export defalut {
    name: 'change',
    data() {
      return {
        input: ''
      }
    },
    methods: {
      changeInput(value, index) {
        console.log(value, index)
      }
    }
  }
</script>
```

## 图片引入问题

如果在项目中添加静态资源图片，一般都会将图片放置在 `static` 目录下面，这里存放着 Vue 的静态资源文件，如果想放在 `src` 下的 `assets` 里面怎么办呢？可以通过 `require` 方法进行动态引入即可:

``` js
data() {
    return {
      footerImglogo: [
        {
          img: require('@/assets/mainPage/images1.png'),
          alt: '图片1'
        },
        {
          img: require('@/assets/mainPage/images2.png'),
          alt: '图片2'
        }]
    }
}
```

## 随时补充