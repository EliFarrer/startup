# JavaScript
We aren't actually learning javascript. Brendan Eich made JS. Inspired by Scheme programming language. Interpreted language. Dynamically typed language. The `Sources` tab is all the source code for whatever your website is.

Semi colons are optional, sometimes it does matter, but not often.

`let var = <val>` set a variable
`const var = <val>` constant variable

Default objects in javascript.
`alert(message)` will popup something

`console.log(message)` will print something out

## Functions
Functions are basically the same as python but with `{}` and the keyword `function`. You can use default parameters in the same way as python.
If you forget to pass in a paramater, depending on the type, you could get `NaN` for numbers, or `undefined` for strings.
If you add an extra parameter, it will not care about it.

### Lambda functions
`(parameter) => body`
```
(word) => console.log(word)
```

So we can assign lambdas to a name by saying `const f = () => 3;` which will assign our unknown lambda to `f`.
If you want to use multiple lines with lambda, you do need to use `{}`

You can mix `+` (concatenation) and `+` (addition). concatenation will always be used if a string is involved.

Arrays
`const arr = ['hello', 'world'];` means that we can't assing words to a different thing, but you can adjust the values of the array.
- `arr.forEach(function)` for each element in array, it will use as a parameter for function

## Writing code in a file
We can do inline, referenced, or script tag.

### Referenced file
`.js` file types
```
<head>
<script scr="index.js"></script>
</head>
```

### inline
`<button onclick="SayHello()">Say hello</button>`

### Script tag
In body tag
```
<script>
function sayGoodbye() {
    alert('Goodbye');
}
</script>
```

## Can we use JS outside of a browser
This is Node js. Ryan Dahl did this. He took V8 the open source interpreter and put it inside an executable program. Type `node` into our terminal. `.exit` will exit.

He introduced JavaScript runtime called Node.

NPM is the Node package manager. It is the `pip` equivalent. NPM also manages packages, installation, package versions, and execution of projects.

Create our own npm packages. `npm init -y` will init the package. You can write any shell command in these scripts.

Use someone else's package. `npm install package`. `require(package)`

`npm run joke` will run it.

inside index.js
```
const giveMeAJoke = require('give-me-a-joke');

setinterval(() => {
    giveMeAJoke.getRandomDadJoke((joke) => {
        console.log(joke);
    }, 1000);
});
```
Debug something with command in VS code. Use Node.js

Front end javascript debug in browser.

Back end use vs code with Node.js


Launch.json is how we make launch configurations.
`"runtimeArgs": ["--watch"]` will have it update your files and run them.