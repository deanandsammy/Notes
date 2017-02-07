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

  fn() === window // tru
  ```

&emsp;&emsp;上述代码在严格模式下会有所不同，[请看第 12 条阐述](https://github.com/elegantspirit/Notes/blob/master/JS/ProJS/strict_mode/strict%20mode.md)

- 对象方法中的 this

    对象中的方法被调用时，方法中的 this 指向调用该方法的对象

    ```JavaScript
    var obj = {
        name: 'Huge',
        sayName: function () {
            return this.name;
        }
    };

    console.log(obj.sayName()); // Huge
    ```

    > 请注意，在何处或者如何定义调用函数完全不会影响到 this 的指向。我把上述实例中的代码更改一下，以解释这句话的意思

    ```JavaScript
    var obj = {
        name: 'Huge'
    };

    function independent() {
        return this.name;
    }

    obj.sayName = independent;

    console.log(obj.sayName()); // Huge  this指向没有发生变化
    ```
