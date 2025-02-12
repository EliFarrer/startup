# Framework
Remember react is just javascript that is commonly used combined with HTML. Other options are `Angular`, `Svelte`, `Vue.js` and others.
- simplify common patterns
- provide common components
- improve performance
- increase device converage

Jordan Walke made React.

JSX is where Javascript and HTML are paired together. It then uses `Babel` or `Vite` to separate them. It can take something like:
```
const i = 3;
const list = (
  <ol class="big">
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```
Which will convert to:
```
const i = 3;
const list = React.createElement('ol', { class: 'big' }, React.createElement('li', null, 'Item ', i), React.createElement('li', null, 'Item ', 3 + i));
```
This is obviously more complicated looking, but the comptuer understand it super well.


- `const jsx = <p>Hello World</p>;` this will not work in the browser
- `const jsx = React.createElement("p", null, "Hello World");` will transpile it with `Babel`
    - `null` represents no elements
    - `Babel` basically does all the work.
- `<p>Hello World</p>` will render in the browser in the DOM

Transpiling happens on the server, execution happens on the browser. We can do this in CodePen.

# Setup
```
mkdir reactDemo && cd reactDemo
npm init -y
npm install vite@latest -D
npm install react react-dom
```
This will initalize a new `npm` directory with `vite` and `react` installed.

In our HTML file, we need to include a `<script>` tag to pull our React code in. We also include where we want the root of our code to be.
```
<body>
  <div id="root"></div>
  <script type="module" src="/index.jsx"></script>
</body>
```

Then in our `index.jsx` file, we:
1) Import `React`
2) Import `ReactDOM`
3) Define a function that will return our `App`
4) Render the app by finding the `root` and calling our `App` function.
```
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div>Hello React</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Now we can compile the jsx using vite and host it. We do this with `npx vite`. This will run the node package without referencing the `package.json` file. We normally do this for js code that runs as a command line program.

Once we do this, we can click on the `localhost` link that it gives us.

## Hello World
We inject the code at `'#root'`. The `{}` allow us to escape the html to put in javascript.

This will inject the phrases.
```
const Hello = ({ phrase }) => {
    return {
        <div>Hello {phrase}</div>;
    }
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<div><Hello phrase="Friends"/><Hello phrase="enemies" /></div>);
```

In javascript, it passes in a single parameter into functions (`props` is what it is normally called), but if we use brackets (`{name}`) we can pull out an individual element of those properties.

> Note that React functions need to be capitalized or they wont work.


# Components (Functions)
This allows you to separate your code.

JSX file
```
<div>
  Component: <Demo />
</div>
```
`Demo` is a react component. The JSX file grabs it from react. `Demo` is not actually valid in HTML, but it is replaced with HTML.
> Note that these functions need to be capitalized.

React
```function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```

So we end up with this `<div>Component: <b>Hello world</b></div>`

Note that you don't need a function, you can just use variables:
```
const hello = <div>Hello</div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(hello);
```
Gets
`<div>Hello</div>`

> Each component can return components inside of it. (Functions calling functions)

# CSS
Works basically the same, but use `className` on an element (in HTML) and not `class` because class is a JS keyword.

In react, we just `import ./index.css`

# Properties
You can pass information to a component like: `<div>Component: <Demo who="Walke" /><div>`. This will pass into `props` the key-value pair `who="Walke"`. We access it like
```function Demo(props) {
    return <b>Hello {props.who}</b>;
}
```

# State
```
function App() {
  const [clicked, updateClicked] = React.useState(false);

  function onClicked() {
    updateClicked(!clicked);
  }

  return <p onClick={onClicked}>clicked: {`${clicked}`}</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

The `useState` function returns a state and also a function to update the state (`updateClicked`). So in the html `<p>`, `onClick` will call `onClicked` and update the `clicked` state. That is then what we return in the html.

> ` \` ${} \` ` is basically an f-string (with backticks around it)

Here is an example of using states
```
function App() {
  return (
    <div>
      Function Style Component: <Demo who='function' initialColor='yellow' />
    </div>
  );
}

function Demo(props) {
  const [color, setColor] = React.useState(props.initialColor);
  const [outlook, setOutlook] = React.useState('beautiful');

  function changeOutlook() {
    setOutlook(outlook === 'exciting' ? 'beautiful' : 'exciting');
  }

  function changeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor('#' + randomColor);
  }

  return (
    <div className='component' onMouseOver={changeColor} style={{ background: color }}>
      <p>
        Hello {outlook} {props.who}
      </p>
      <button onClick={changeOutlook}>change</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
Notes:
- We set the inital color.
- get the `color` and the `colorFunc`
- write our own function to change the color
- Set the style to that color and have it call a function `onMouseOver`.

# Why it is called React
A components properties/state will react to actions and update them by calling the `render` function.

# Router
When we click a button, it needs to change the state.

Single page application, we keep the header and footer and then pull in the login, play, or scoreboard.

`NavLink` is a special react component


















# Compiling JSX
Toolchain.
Vite runs babel for you and means you don't need to do the Go Live.

In scripts and dev, do vite.

Run vite.
`npm run dev`

Type o and hit enter.

Debugging, the other index.jsx file is what it is actually runnning.

Adding routing

# React Methods
`React.`
- `createElement` will generate HMTL and when the user interacts with those, React will react.

# How does react work?
JSX it is returning 
`onClick={Increment}`
JS and react aren't connected, we aren't re rendering jsx. React doens't know. So we need to let React know what state variables are important.
React has a function calle `React.useState(0);` which passes back an array with the value of the state variable, and then the second thing is the function to change that. The const is on the array, not the values on the array.

# Questions
npm install vite?
What is the difference between a .js and a .jsx file.?
running js vs running jsx?
Debugging them....
Isn't js just on a browser?
`script` in json `dev: vite` `npm run dev`
what is jsx, node...

# Answers
we use react to work with JS and HTML. jsx is a special flavor of js but with htmx which means you can put html tags in js. React takes jsx files and reads it and turns it into js that the browser can understand. babel is on the server. makes it so we can run jsx files. vite is a packageing thing. 


node package manager. When installing vite or react we install them into the app. Express....

npm install dependencies