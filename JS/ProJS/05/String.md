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

#### 1.4 RegExp作为参数的方法

###### 1.4.1 match()

> match()方法在字符串内检索指定的值，找到一个或多个正则表达式的匹配 

语法：string.match(regexp)

参数 | 描述
---|---
regexp | 必须。如果参数不是RegExp对象，则需要首先把它传递给RegExp构造函数，将其转换为RegExp对象

```javascript
var str = 'h12h34ll56789o666';  // [12, 34, 56789, 666]

// 方法一：常规方法
function findStr(str) {
    var arr = [];
    var temp = '';
    var test;

    for (var i=0,len=str.length; i < len; i++) {
        test = +str[i];
        console.log(test);

        if (test) {
            temp += test;
        } else {
            temp && arr.push(temp);
            temp = '';
        }
    }

    temp && arr.push(temp);

    return arr;
}

console.log(findStr(str));

//方法二: 正则表达式
function findStr(str) {
    return str.match(/\d+/g);  
}

console.log(findStr(str));
```
