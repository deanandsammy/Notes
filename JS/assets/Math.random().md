#### JavaScript 中的 Math.random() 方法

获取一个随机数在 JavaScript 中是经常用到的方法。例如， 游戏编程中的扔骰子，获取
指定数组中的随机项等等。下面对这个方法进行一个简单的总结

##### 定义

Math 对象的 random() 方法返回介于 0 ~ 1(0 <= x < 1) 之间的一个随机数

```JavaScript
var getRandomNum = Math.random();

console.log(getRandomNum);  // 0.7175353796781521
```
##### 返回两个指定数值之间的随机数(不包含最大值)

在实际开发中，我们可能会需要获取两个指定数值之间的随机数

- 获取两个指定数值之间的随机浮点数

```JavaScript
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
```

- 更多时候，我们需要的是获取两个指定数值之间的随机整数

```JavaScript
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
```

- 此时，需求变了(^-^), 我们获取的指定数值之间的随机整数需要包含最大值 max

```JavaScript
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

- 抛硬币(随机布尔值)

1 和 0 代表硬币的正反面

```JavaScript
function coinToss() {
    return Math.floor(Math.random() * 2);
}
```

如果需要返回布尔值，可以这样写

```JavaScript
function coinToss() {
    return (Math.floor(Math.random() * 2) === 0);
}
```

- 从指定的整数数组中获取随机数

已知一个包含一组整数的数组，我们想要从中随机获取一个数值，代码可以这样写

```JavaScript
var numPoll = [1, 2, 6, 12, 66, 5];

var getNum = numPoll[Math.floor(Math.random() * numPoll.length)];
```

- 实现洗牌功能

所谓洗牌，是指随机打乱一个包含一些整数的数组里的整数，然后将打乱后的整数放进一个新的数组，然后一次性将它们打印出来，代码如下

```JavaScript
function shuffle(numPool) {
    let i = 0, tempPool, randomItem;
    let length = numPool.length;

    while (i < length) {
        randomItem = Math.floor(Math.random() * length);

        tempPool = numPool[i];
        numPool[i] = numPool[randomItem];
        numPool[randomItem] = tempPool;
        i++;
    }
    return numPool;
}

shuffle(numPool);

while (numPool.length > 0) {
    console.log(numPool.pop());
}
```

- 用不重复的随机整数填充数组

```JavaScript
"use strict";

/*
 *  在指定范围内获取指定个数的随机整数，这些整数不会重复，将获取到的整数填充到数组中
 *
 *  @param {Number} min 最小值

 *  @param {Number} max 最大值
 *
 *  @param {Number} len 数组长度
 * */

function randomArray(min, max, len) {
    if (len > max - min + 1) {
        console.log('参数 len 不在可使用的范围内');
        return;
    }

    let arrPool = [];

    while (arr.length < len) {
        // 获取[min, max]范围内的随机整数，包含 max最大值
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        let found = false;

        // 检测随机产生的整数数值是否已经存在于 arrPool 中
        for (let i = 0; i < arr.length; i++) {
            if (arrPool[i] === randomNum) {
                found = true;
            }
        }

        if (!found) {
            arrPool[arr.length] = randomNum;
        }
    }
    return arrPool;
}

console.log(randomArray(2, 5, 4));
```
