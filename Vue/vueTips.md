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

## 如何在 Vue 全局注册函数

在 utils 文件夹下新建 `base.js`，写入以下代码

``` js
exports.install = function(Vue, options) {
  Vue.prototype.testFunction = function() {
    alert('执行成功');
  }
}
```

在 `main.js` 下引入全局方法文件

``` js
import base from '@/utils/base.js'
Vue.use(base)
```

之后在任意组件下直接调用该方法即可

```
this.testFunction()
```

## 传入 props 技巧

#### 推荐使用验证模式来校验 props 例如：

``` js
props: {
  sum: Number,
  post: Object
}
```

#### 验证 prop

``` js
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```

## 随时补充 