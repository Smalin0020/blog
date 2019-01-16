# rem适配
- `rem（font size of the root element）`
## 1.rem计算
### 1.1 JavaScript计算
- 通过JavaScript读取屏幕宽度，然后根据宽度计算出对应的尺寸并设置根元素的font-size。
``` js{0}
const oHtml = document.getElementsByTagName('html')[0];
const width = oHtml.clientWidth;
// 320px的屏幕基准像素为12px
oHtml.style.fontSize = 12 * (width / 320) + "px";
```
- 这样iphone8（375px）下html的font-size 就是14.0625px，iphone8p下font-size就是15.525px。
- 如果在iphone8（375px）下设置元素font-size为 1.7066rem， 效果跟设置其font-size为 24px 是一样的(24 / 14.0625 = 1.7066)。
### 1.2 媒体查询
- 既然只是为了根据屏幕宽度来设置`<html>`元素的字体大小，那我们完全也可以通过css3媒体查询来完成这部分工作。
``` css{0}
@media screen and (min-width: 375px){
    html {
        font-size: 14.0625px;   
    }
}
@media screen and (min-width: 360px){
    html {
        font-size: 13.5px;
    }
}
@media screen and (min-width: 320px){
    html {
        font-size: 12px;
    }
}
html {
    font-size: 16px;
}
```