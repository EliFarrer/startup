# JavaScript
We aren't actually learning javascript. Brendan Eich made JS. Inspired by Scheme programming language. Interpreted language. Dynamically typed language. The `Sources` tab is all the source code for whatever your website is.

Semi colons are optional, sometimes it does matter, but not often.

`let var = <val>` set a variable (scope is the block it is in)
`const var = <val>` constant variable

Default objects in javascript.
`alert(message)` will popup something

`console.log(message)` will print something out

`console.log('${var}=${var})` is basically the python f-string version

> Comments are the same as c++
> good form uses a `;` at the end

You can mix `+` (concatenation) and `+` (addition). concatenation will always be used if a string is involved.

## Formatted messages
`console.log('hello %s', 'world');`

## CSS styles
`console.log('%c JavaScript demo', 'font-size:1.5em; color:green;');`
- the `%c` specifies the CSS style


## Functions
Functions are first class objects which means they can be assigned to a variable.

Functions are basically the same as python but with `{}` and the keyword `function`. You can use default parameters in the same way as python.

> You can declare functions in functions.

> If you forget to pass in a paramater, depending on the type, you could get `NaN` for numbers, or `undefined` for strings. If you add an extra parameter, it will not care about it.

## Where to use JS
Codepen or the Inspector on Chrome under Console

### Lambda functions
These are normally used so you can pass a function into another function.
```
const add = function (a,b=0) {
  return a + b;
}

function doMath(operation, a, b) {
  return operation(a,b);
}

console.log(doMath(add, 5, 3)); // predefined function

console.log(doMath(function (a,b) { return a - b; }, 5, 3));  // anonymous function

console.log(doMath((a,b) => a-b, 5, 3));  // arrow syntax
```

`(parameter) => body`
```
(word) => console.log(word)
```

So we can assign lambdas to a name by saying `const f = () => 3;` which will assign our unknown lambda to `f`.
If you want to use multiple lines with lambda, you do need to use `{}`.

### Arrow functions
```
() => 3;
() => { 3; };
() => { return 3; };
```
> If you don't include a `return` keyword and the function has a single expression, it will automatically return. If you have curly braces, it will act like a normal function.

### Closure
Create a function that has the parameters, and also any variables that were active when the funciton was created. Creates something that knows the state when it was created.

```
function makeClosure(init) {
  let closureValue = init;
  return () => {
    return `closure ${++closureValue}`;
  };
}
```
We make a function that returns a function. Later we can call it.
```
const closure = makeClosure(0);

console.log(closure());
// OUTPUT: closure 1

console.log(closure());
// OUTPUT: closure 2
```
It can still act like it is in the scope even though it isn't.

### Functions in React
Using normal functions
```
function App() {
  const [count, setCount] = React.useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>n++</button>
      <button onClick={Decrement}>n--</button>
    </div>
  );
}
```

Using arrow functions
```
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count+1)}>n++</button>
      <button onClick={() => setCount(count-1)}>n--</button>
    </div>
  );
}
```

There is one problem. It is possible that the `count` was changed between when we edited it and when it was updated. So that means sometimes when we click the button it may change and other times it may not. So the way we fix this is `setCount((prevCount) => prevCount+1);`
So it becomes like this:
```
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>n++</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>n--</button>
    </div>
  );
}
```

Things start to look a little clunky so...
```
function App() {
  const [count, setCount] = React.useState(0);

  function counterOpFactory(op) {
    return () => setCount((prevCount) => op(prevCount));
  }

  const incOp = counterOpFactory((c) => c + 1);
  const decOp = counterOpFactory((c) => c - 1);
  const tenXOp = counterOpFactory((c) => c * 10);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incOp}>n++</button>
      <button onClick={decOp}>n--</button>
      <button onClick={tenXOp}>n*10</button>
    </div>
  );
}
```
This makes it so we have less code and can create any funcitons we need.

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

# Can we use JS outside of a browser `Node.js`
This is Node js. Ryan Dahl did this. He took V8 (the Chromium open source interpreter) and put it inside an executable program. Type `node` into our terminal. `.exit` will exit. This means we can use js on the backend and on the frontend.

Installed `Node` with `nvm` with `npm`.

## Running node
`node -e "console.log("hello world")` will execute js in your console. If you just type `node` then it will run in interpretive node.

`node file.js` will execute the file.

## Node Package Manager
`npm` is the `N`ode `P`ackage `M`anager. It is the `pip` equivalent. NPM also manages packages, installation, package versions, and execution of projects.

If you want to use a package,
1) install the package using `npm`
2) `require` that package in your code

> `npm uninstall package` will uninstall

### Setup a directory
Before this happens, your code needs to be able to use `npm`. We create a directory and then move into it and run `npm init` in it.
> `-y` when you init a directory will create it automatically without having to answer a bunch of questions.

### Running something using NPM
In the `package.json` file created when we try to run node, will be a `scripts` key. Next to it you can put a terminal command that will execute node on a file. This is called a launch configuration.

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
    "dev": "node main.js"
  }
  "runtimeArgs": ["--watch"],
}
```
Note that `dev` is a command that is run when we do `npm run dev` which will run `node main.js`.

Note that `runtimeArgs` will add `--watch` as a parameter, so when you do `npm run dev`, it will actuall do `node --watch main.js`. This makes it so that node will restart automatically when you make a change while debugging.

> when you add dependencies, `npm` will create `package-lock.json` which contains the versions of packages and the `node_modules` directory which contians all the package source code. Don't check these into github!

> when you clone a directory, use `npm install` inside the directory to copy all the packages down.

## Example
inside `index.js`
```
const giveMeAJoke = require('give-me-a-joke');

setinterval(() => {
    giveMeAJoke.getRandomDadJoke((joke) => {
        console.log(joke);
    }, 1000);
});
```

## Debugging with Node
You can debug on the backend and frontend using `node`.
Curl is a command line browser. It can cause breakpoints as well.

> Debug something with command in VS code. Use Node.js Front end javascript debug in browser. Back end use vs code with Node.js
s

# More advanced js
```
console.log('Hello World');
```

## Console.log
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
`const arr = ['hello', 'world'];` means that we can't assing words to a different thing, but you can adjust the values of the array.
Array
- push add an item to the end of the array
- pop remove an item from the end of the array
- slice return a sub-array
- sort run a function to sort an array in place
- values freates an iterator for use with a `for of` loop
- find find the first item satisfied by a test function
- forEach run a function on each array item
- reduce run a function to reduce each array item to a single item
- map run a function to map an array to a new array
- filter run a function to remove items
- every run a function to test if all items match
- some run a function to test if any items match

## Objects
Objects are basically key-value pairs, basically a dictionary or a map. The key is a string or symbol, the value is anything. They have constructors, `this`, and other static functions and inheritacne.

You access properties ith `.` or `[]` notation. You make new ones with the `new` operator. You can add new properties just by calling the property. 

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

## Constructor
Any function that returns an object is called a constructor and we can use the `new` operator.
```
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

> the `this` pointer just refers to the object itself.

## Classes and Inheritance
Classes are basically objcets intended to be used in a lot of different places.
```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  print() {
    return super.print() + '. I am a ' + this.position;
  }
}
```

> a # before a property would make that property private. For example, in `Person`, `#name;` or `this.#name` would referenec the private one.

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

# JSON files
Textual representation. Contains `string`, `number`, `boolean`, `array`, `object`, or `null` adn nothing else. Encoded with UTF-8 It looks like this:
```
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```

```
const obj = { a: 2, b: 'crockford', c: undefined };

const json = JSON.stringify(obj); // convert and object to JSON string

const objFromJson = JSON.parse(json); // convert from JSON string to JSON object.

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```
> JSON doesn't have any undefined or other things like `undefined` so it will get dropped.

# Local Storage
Within your browser, there is local storage. We can store stuff on that users computer even after refreshes or HTML changes.

- `localStorage.setItem('object', JSON.stringify(myObject));` sets a JSON string to a name
- `localStorage.getItem('object');` gets a JSON string from a name
- `localStorage.removeItem('object');` remove an object
- `localStorage.clear()` clears

We see this in the `Application` tab `Storage > Local Storage`.

Local Storage can only hold `string`, `number` or `boolean`.

# Destructuring
This is pulling specific data out of objects or arrays.

```
const a = [1, 2, 4, 5];
const [b, c] = a; // only grabs the first two values from a
const [b, c, ...others] = a; // grabs the first two values and throws everything else in an array called others
```

This works basicall the same with objects, other than you need to include the property you want
```
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };
const { a, c } = o; // gets the a and c properties
const { a: count, b: type } = o; // will rename a to count and b to type with the same effect as the previous one
```
> note the `{}`

You can also include default values
```
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```

React destructures teh array to get the variable adn update function in `React.useState`
```
function Clicker({ initialCount }) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker initialCount={3} />);
```

# JavaScript console
This is the `print` statement thing.

`console.log('hello');` is to log

## Timers
This is to see how long a piece of code is running.
```
console.time('demo time');
for (let i = 0; i < 10000000; i++) {}
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 12.74 ms
```

Timeout
`setTimeout`, you pass in a function and a time. After that time passes, it will call the function. Note that JS will keep running and jump back to the function only once the time is expired.
```
setTimeout(() => console.log('time is up'), 2000);

console.log('timeout will happen later');
```

`setInterval` is basically the same as `setTimeout`, but it calls the function repeatedly after the time interval passes.
```
const interval = setInterval(() => console.log('do something'), 1000);

setTimeout(() => clearInterval(interval), 5000);
```
If you want to stop the exectution of an interval, you can capture it and then call `clearInterval` on it.

## Count
```
console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');
// OUTPUT: b: 1
```

# Promises
## Motivation
Each task takes a different amount of time. We want to do them all but in different amounts of time. Getting a bunch of requests is like this.

Browser rendering is single threaded. You can only run one task at one. If we write a basic fibonacci function and run it in the browser. It will render the website useless becaus of single threading.

## How Promises work
### States
A promise is when a task is done it will alert that it is done. They are always on three separate states:
- pending: currently working on the task
- fulfilled: task is done successfully
- rejected: task failed

```
function callback(resolve) {
  resolve('done');  // the task is complete
}

const p = new Promise(callback);

p.then((result) => console.log(result));  // if you want to do something
```

### Resolve and Reject
When you call `resolve` or `reject` from a promise, that is when it is completed, or fails.

### Then Catch and Finally
- `then` is called when the promise is resolved, it will call that function.
- `catch` is called when the promies is rejected
- `finally` is always called

`Promise` is a promise object. you pass it a function and it passes its resolve function in as a parameter to your function.

Declared a function -> go to new Promise -> resolve it so it is done => check to make sure it is done or fulfilled -> ...

in callback, `setTimeout(() => { resolve('done');}, 4000);

If we want to change the item

```
function goShop(item) {
  return (resolve) => {
    setTimeout(() => {
      resolve(item);
    }, 5000);
  };
}

const p = new Promise(goShop('milk'));
```

Reject function
```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```
This isn't really used because you can use if statements with async and await.

In the pizza one, all of the calls return promises for the next calls.

## Async Await
### Await
Await is a new syntax that pulls the result out of then and returns it rather than the promise itself. It blocks until the state of the promise is `fulfilled`, or throws an exception when it is `rejected`. The coin toss from above turns into this.
```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```
### Async
Async is something we use on a function. Await can only be used in top level JS functions or in a function defined with `async`. `async` means the function will return a promise.  

The trouble with await is it is just syntactic sugar. It is literally just a then. When it compiles, it just puts it all in a big fat then block. 

`async` says it returns a promise. If you put this on a function, it just made a function.

If you use an await, you have to be async, and everything above you have to be async.

Something like this becomes...
```
  // Promise
  placeOrder(order)
    .then((order) => serveOrder(order))
    .catch((order) => {
      orderFailure(order);
    });
```

```
  try {
    await placeOrder(order);
    await makePizza(order);
    serveOrder(order);
  } catch (order) {
    orderFailure(order);
  }
```