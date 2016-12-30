#严格模式

1. 给未经声明的变量赋值在严格模式下会抛出ReferenceError的错误。

2. 严格模式下，对未经声明的变量调用delete会导致错误。

3. 八进制字面量在严格模式下是无效的，会导致支持该模式的JavaScript引擎抛出错误。

4. 严格模式下，无法使用 with 语句。

    ```javascript
    var obj = {};
    
    obj.a = 1;
    obj.b = 2;
    
    with (obj) {
        console.log(a + b); // 严格模式下会报错
    }
    ```
    
5. 
