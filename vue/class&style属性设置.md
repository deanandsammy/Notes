## class&style样式设置

class
---

```html
<div id="box">
    <strong>阿斯顿发</strong>
</div>
```

```css
.red {
    color: red;
}
.gray {
    background-color: gray;
}
```

```javascript
window.onload = function() {
    new Vue({
        el: '#box',
        data: {
            red: 'red',
            gray: 'gray'
        }
    });
}
```
**样式生效的写法**

1. :class="[red, gray]" 调用的是vue参数里的data属性

    ```html
    <strong :class="[red, gray]"></strong>       
    ```
    
2. :class="{red: true, gray: true}"
     
     ```html
     <strong :class="{red: true, gray: true}"></strong> 
     ```
     
    _第二种方法也是可以调用vue参数了的data属性的,记住，**Vue里面一切皆是数据**_
    
    ```javascript
    new Vue({
        el: '#box',
        data: {
           red: 'red',
           gray: 'gray',
           a: true,
           b: false
     }   
    });
    ```
    ```html
    <strong :class="{red: a, gray: b}"></strong>
    ```

3. :class="json",第二种方法的精简版，官方版本

    ```javascript
    new Vue({
        el: '#box',
        data: {
            red: 'red',
            gray: 'gray',
            json: {
                a: true,
                b: false
            }
        }
    });
    ```

    ```html
    <strong :class="json"></strong>
    ```
    
style
---
> 和class基本相同

1. :style="{}"

```html
<strong :style="{color: 'red', backgroundColor: 'gray'}"></strong>
```

2. :style="a"

    ```javascript
    new Vue({
        el: '#box',
        data: {
            red: 'red',
            gray: 'gray',
            a: {
                color: 'red',
                backgroundColor: 'gray' //注意复合样式的书写规范
            }
        }
    });
    ```
    
    ```html
    <strong :style="a">阿斯顿发</strong>
    ```
3. :style="[a, b]", a, b对应的是data里的两个json数据






































