JS events usually have two properties: currentTarget & target

> identifies the current target for the event, as the event traverses the DOM.
It always refers to the element to which the event handler has been attached to,
as opposed to event.target which identifies the element on which the event occurred.

Let's have a look at this code:

```html
<!--html-->
<div id="outer">
    <div id=inner></div>
</div>
```

```css
/*css*/
#outer {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid purple;
}
#inner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    height: 100px;
    background-color: orange;
}
```

```javascript
var outer = document.getElementById('outer');

outer.onclick = function (event) {
    console.log(event.currentTarget);
    console.log(event.target);
}
```

Briefly speaking, the difference between the two is:

- **currentTarget** is the element that the event listener is attached to
- **target** is the element that triggered the event.
