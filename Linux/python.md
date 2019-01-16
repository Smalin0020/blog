# python

## 在 pip install xxx 时出现 unsupported locale setting 错误

根本原因是:你的环境变量LC_ALL丢失或无效

运行如下代码即可

```
$ export LC_ALL=C
```