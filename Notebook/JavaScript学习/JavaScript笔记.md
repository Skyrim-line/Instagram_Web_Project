# JavaScript

## 1.Intro

One of many JavaScript HTML methods is `getElementById()`.

```html
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

</body>
</html>
```

### 1.1 <script> tag

In **HTML, JavaScript** code is inserted between `<script>` and `</script>` tags.

```html
<html>
<body>

<h2>JavaScript in Body</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>

</body>
</html> 
```

### 1.2 JavaScript in <head>

 a JavaScript `function` is placed in the `<head>` section of an **HTML page.**

```html
<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```

## 2.Output

JavaScript can "display" data in different ways:

- Writing into an HTML element, using `innerHTML`.
- Writing into the HTML output using `document.write()`.
- Writing into an alert box, using `window.alert()`.
- Writing into the browser console, using `console.log()`.

### 2.1 innerHTML

To access an HTML element, JavaScript can use the `document.getElementById(id)`method. 

The `id` attribute defines the HTML element. The `innerHTML` property defines the HTML content:

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
```

### 2.2 document.write()

For testing purposes, it is convenient to use `document.write()`:

```html
<html>
<body>

<h2>My First Web Page</h2>
<p>My first paragraph.</p>

<p>Never call document.write after the document has finished loading.
It will overwrite the whole document.</p>

<script>
document.write(5 + 6);// 会直接显示最终结果为：11
</script>

</body>
</html> 
```

### 2.3 window.alert()

Window.alert()调用之后会弹出一个窗口（和下载文件的时候弹出的窗口类型一致）

```html
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
```

### 2.4 console.log()

可以用console.log() 的方法来debugging

```html
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
```

### 2.5 JavaScript Print

Javascript中没有任何的print类似python和C的方法，如果调用了window.print() 则表示的是打印当前页面的内容

```html
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>
```



## 3. Statements

JavaScript statements are composed of:

**Values, Operators, Expressions, Keywords, and Comments.**

JavaScript uses the keywords `var`, `let` and `const` to **declare** variables. 每个语句要以分号结尾

一般定义变量用 `var` and `let` 

`let` : let用于定义一个变量

```html
<script>
let x;
x = 6;
document.getElementById("demo").innerHTML = x;
</script>
```

### 3.1When to Use var, let, or const?

\1. Always declare variables

\2. Always use `const` if the value should not be changed

\3. Always use `const` if the type should not be changed (Arrays and Objects) 对象为数组和字典的时候使用const 命名常量

\4. Only use `let` if you can't use `const`

\5. Only use `var` if you MUST support old browsers.

例子：

```javascript
let x = "John" + " " + "Doe";
let x = "5" + 2 + 3;  //output : 523//
//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
```

### 3.2 Dollar Sign $

- $ are valid variable names:
- In the JavaScript library jQuery, for instance, **the main function** `$` is used to select HTML elements. 
- In jQuery `$("p");` means "select all p elements".

```html
<script>
let $$$ = 2;
let $myMoney = 5;
document.getElementById("demo").innerHTML = $$$ + $myMoney;
  //output: 7 //
</script>
```

### 3.3 const

JavaScript `const` variables must be assigned a value when they are declared: 

`const`在JavaScript中一旦声明就必须要调用

一般用于定义：

- A new Array
- A new Object
- A new Function
- A new RegExp

```javascript
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

