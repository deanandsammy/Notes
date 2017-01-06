# String

## 1. 字符串拥有的方法

#### 1.1 charAt()

> charAt()方法返回指定位置的字符

```javascript
var str = 'Software Engineer';
var n = str.charAt(str.length - 1);
console.log(n); // r 返回字符串中的最后一个字符
```

#### 1.2 substring()

> substring()方法用于提取字符串中介于两个指定下标之间的字符。包括开始处的字符，但不包括
结束处的字符。

#### 1.3 split()

> split()方法用于将一个字符串分割成字符串数组

语法: string.split(separator, limit)

参数 | 描述
---|---
separator | 可选项。字符串或正则表达式，从该参数指定的地方分割 string Object
limit | 可选项。该参数指定返回数组的最大长度

**如果把空字符串('')作为separator，那么string Object中的每个字符都会被分割**

```javascript
var str = 'hello';
str.split(''); // ['h', 'e', 'l', 'l', 'o']
```
