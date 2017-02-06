## JavaScript中的 this 小结

#### this 的概念描述
> this 指向函数据以执行的环境对象

#### 不同执行环境中的 this

- 全局执行环境中的 this

>  在全局执行环境中，this 指向全局对象，无论是否在严格模式下

```JavaScript
console.log(this.document === document); // true

// 在浏览器中，全局对象为 window 对象
console.log(this === window); // true

this.a = 12;
console.log(window.a); // 12
```

- 函数执行环境中的 this

函数执行环境中的 this, 指向函数据以执行的环境对象

```JavaScript
function fn() {
    return this;
}

fn() === window // true
```
