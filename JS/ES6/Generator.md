# Generator 

- Generator函数的this

  >Generator函数总是会返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，
  也继承了Generator函数prototype对象上的属性和方法。

   ```javascript
   function* gen() {
       //code  
   }
   
   gen.prototype.sayHi = function() {
       return 'hello';
   }
   
   let obj = gen();  //返回iterator对象
   
   obj instanceof gen;  //true
   obj.sayHi(); // 'hello'
   ```

  > 由于Generator函数返回的总是遍历器对象（指针对象），所以不能将其当做
  普通的构造函数,更不能使用new操作符，会报错（Typeerror）。

   ```javascript
   function* gen() {
       this.name = 'Nicholas';
   }
   
   let obj = gen();
   obj.name; // undefined
   ```

   > 有没有办法可以让Generator函数返回一个正常的对象实例，既可以使用next方法，又可以获取正常的this值？
    当然是有的。
    
    ```javascript
    function* gen() {
        this.name = 'Nicholas';
        yield this.age = 27;
        yield this.job = "Software Engineer";
    }
    
    let obj = {};
    let iterator = gen.call(obj);
    
    iterator.next();
    iterator.next();
    iterator.next();
    
    console.log(iterator.name);; // "Nicholas"
    console.log(iterator.age);; // 27
    console.log(iterator.job); // "Software Engineer"
    ```    
    
   > 上面的代码中，执行的是遍历器对象iterator，但生成的对象实例却是obj，有没有什么办法将这两个
    对象统一起来呢？一个思路就是讲obj换成gen.prototype。
    
    ```javascript
    function* gen() {
        this.name = 'Nicholas';
        yield this.age = 27;
        yield this.job = "Software Engineer";
    }
    
    let iterator = gen.call(gen.prototype);
    
    // 改造成标准的构造函数形式，可以使用new操作符，指其中涉及到构造函数返回值的知识点，另行翻阅
    // function Func() {
    //     return gen.call(gen.prototype);      
    // }
    // let iterator = new Func();
    
    iterator.next();
    iterator.next();
    iterator.next();
    
    console.log(iterator.name);; // "Nicholas"
    console.log(iterator.age);; // 27
    console.log(iterator.job); // "Software Engineer"
    ```
