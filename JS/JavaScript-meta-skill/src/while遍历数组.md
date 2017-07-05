#### while遍历数组

```javascript
// 方法一
let arr = [1, 2, 3, 4, 5]
let i = -1

while (++i < arr.length) {
    console.log(arr[i])  
}
```

```javascript
// 方法二
let arr = [1, 2, 3, 4, 5]
let i = 0

while (i < arr.length) {
    console.log(arr[i++])
}
```
