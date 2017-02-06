#严格模式

1. 给未经声明的变量赋值在严格模式下会抛出ReferenceError的错误

2. 严格模式下，对未经声明的变量调用delete会导致错误

3. 八进制字面量在严格模式下是无效的，会导致支持该模式的JavaScript引擎抛出错误

4. 严格模式下，无法使用 with 语句

    ```javascript
    var obj = {};
    
    obj.a = 1;
    obj.b = 2;
    
    with (obj) {
        console.log(a + b); // 严格模式下会报错,实际开发中也不要使用 with 语句，会导致在 ie 下的内存泄露
    ，}
    ```
    
5. 普通模式下，ECMAScript 有两种变量作用域（scope）:全局作用域和函数作用域。严格模式创造了第三种作用域：eval 作用域。普通模式下，eval 语句的作用域取决于它处于全局还是函数作用域。而严格模式下，eval 语句本身就是一个作用域，代码执行后，不会再生成全局变量

6. 不允许删除变量、对象和函数

7. 不允许变量重名

8. 不允许使用转义字符

9. 不允许对只读属性赋值

    ```javascript
    'use strict';
    
    var obj = {};
    
    Object.defineProperty(obj, 'x', {value: 1, writable: false});
    obj.x = 2; //报错
    ```
    
10. 不能删除一个不允许被删除的值

    ```javascript
    'use strict';
    delete Object.prototype;
    ```
    
11. 严格模式下，不能使用 eval 和 arguments 作为变量名

12. 禁止 this 指向全局对象

    > 在严格模式下，this将保持他进入执行环境时的值，所以下面的this将会默认为undefined

    ```javascript
    function fun1() {
        console.log(!this);
    }
    
    fun1(); // false  this指向window对象
    
    function fun2() {
        'use strict';
        console.log(!this); // true 严格模式下，this被禁止指向 window 对象，返回undefined
    }
    ```
