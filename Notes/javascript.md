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

> Comments are the same as c++
> good form uses a `;` at the end

## Where to use JS
Codepen or the Inspector on Chrome under Console

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

## Writing JS with HTML
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

## Can we use JS outside of a browser `Node.js`
This is Node js. Ryan Dahl did this. He took V8 (the Chromium open source interpreter) and put it inside an executable program. Type `node` into our terminal. `.exit` will exit. This means we can use js on the backend and on the frontend.

He introduced JavaScript runtime called Node.

Installed `Node` with `nvm` with `npm`.

`npm` is the `N`ode `P`ackage `M`anager. It is the `pip` equivalent. NPM also manages packages, installation, package versions, and execution of projects.

### Running node
`node -e "console.log("hello world")` will execute js in your console. If you just type `node` then it will run in interpretive node.

`node file.js` will execute the file.

### `npm`
If you want to use a package,
1) install the package using `npm`
2) `require` that package in your code

> `npm uninstall package` will uninstall

Before this happens, your code needs to be able to use `npm`. We create a directory and then move into it and run `npm init` in it.
> `-y` when you init a directory will create it automatically without having to answer a bunch of questions.

`npm run program` will run it.

### Package.json
In the directory we just made will be `package.json`
1) contains metadata
2) the default JS file `main`
3) commands to do things like run or test or distribute code `scripts`
4) dependencies

```
{
  "name": "npmtest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

> when you add dependencies, `npm` will create `package-lock.json` which contains the versions of packages and the `node_modules` directory which contians all the package source code. Don't check these into github!

> when you clone a directory, use `npm install` inside the directory to copy all the packages down.

### Example
inside `index.js`
```
const giveMeAJoke = require('give-me-a-joke');

setinterval(() => {
    giveMeAJoke.getRandomDadJoke((joke) => {
        console.log(joke);
    }, 1000);
});
```
> Debug something with command in VS code. Use Node.js Front end javascript debug in browser. Back end use vs code with Node.js


Launch.json is how we make launch configurations.
`"runtimeArgs": ["--watch"]` will have it update your files and run them.