# RegExp

## 1. 基本概念

#### 1.1 RegExp对象

> 正则表达式是描述字符模式的对象，用于对字符串进行模式匹配及检索替换，是对字符串执行模式
匹配的强大工具


## 2. 方法

#### 2.1 test()

> test()方法用于检测一个字符串是否匹配某个模式。如果字符串中有匹配的值返回 true，否则返回
false

语法：RegExpObject.test(string)

参数 | 描述
--- | ---
string | 必需。要检测的字符串

```javascript
var str = 'hello world';
var pattern = /hello/g;

console.log(pattern.test(str)); // true
```
