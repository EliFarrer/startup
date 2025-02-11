# JavaScript
We aren't actually learning javascript. Brendan Eich made JS. Inspired by Scheme programming language. Interpreted language. Dynamically typed language. The `Sources` tab is all the source code for whatever your website is.

Semi colons are optional, sometimes it does matter, but not often.

`let var = <val>` set a variable (scope is the block it is in)
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
```
const add = functin (a,b=0) {
  return a + b;
}

function doMath(operation, a, b) {
  return operation(a,b);
}

console.log(doMath(add, 5, 3)); // predefined function

console.log(doMath(function (a,b) { return a - b; }, 5, 3));  // anonymous function

console.log(doMath((a,b) => a-b, 5, 3));  // arrow syntax
```
Composing functions in functions is super common in js and react.

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

### Arrow functions
```
() => 3;
() => { 3; };
() => { return 3; };
```
If you don't include a `return` keyword on multi line arrow functions, it won't return anything

### Closure
Create a function that has the parameters, and also any variables that were active when the funciton was created. Creates something that knows the state when it was created.

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

## Debuggin JS
You can debug on the backend and frontend using `node`.
Curl is a command line browser. It can cause breakpoints as well.


> Debug something with command in VS code. Use Node.js Front end javascript debug in browser. Back end use vs code with Node.js


Launch.json is how we make launch configurations.
`"runtimeArgs": ["--watch"]` will have it update your files and run them.

## More advanced js
```
console.log('Hello World');
```

### Console.log
This is super helpful for debugging.

- `%s` is a string
- `%c` is html or css stuff

`console.time('demo time');` will print out the different in time when we call `console.timeEnd('demo time');`

```
console.count('a');
console.count('a');
console.count('b');
```

## Arrays
`const a = [1, 2, 3];`

- `a.map((i) => i + i);`
- `a.reduce((v1, v2) => v1 + v2);`
- `a.sort((v1, v2) => v2 - v1);`

## Objects
Objects are basically key-value pairs, basically a dictionary or a map.

```
const obj = {
  a: 3,
  b: 'fish',
  c: [1, true, 'dog'],
  d: { e: false},
  f: function () { return 'hello'; },
};
```

`Object`
- `.entries(obj)`
- `.keys(obj)`
- `.values(obj)`
- `delete obj.a;` will delete

## Classes and Inheritance
```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class employee extends person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {}  // overload the superclass defined print.
}
```

## Destructing objects
```
const a = [1, 2, 5, 5];
const [b, c] = a; will take the first two values out of a
const [b, c, ...others] = a; will get the first two and throw everything else in others.

const o = { a: 1, b: 'animals', c: ['fish', 'cats'] }
const {a, c} = o; // makes two variables corresponding to the keys of `a` and `c`

function Clicker({initialCount}) {
  const [count, update] = React.useState(initialCount);
  return <div onClick={() => update(count + 1)}>Click count: {count}</div>;
}
```

## Other useful things
```
setTimeout(() => console.log('time is up'), 2000);
console.log('timeout will happen later');

setInterval...
```

## JSON files
textual representation.

```
const json = JSON.stringify(obj);

const objFromJson = JSON.parse(json);
```
> JSON doesn't have any undefined or other things like that so it will get dropped.

Within your browser, there is local storage. We can store stuff on that users computer. 

`localStorage.setItem('object', JSON.stringify(myObject));`

`localStorage.getItem('object');`

`'object'` is the name of the thing we are storing.

We see this in the application tab > Local storage.

## 
`useState` to get component state
`useEffect` when a change happens.....

``` function UseEffectHookDemo() {
  React.useEffect(() => {

  })
}
```

nothing will render every time
[] will only do the first time
[count1] will render every thime count1 changes.