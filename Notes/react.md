# Framework
Remember react is just javascript that is commonly used combined with HTML. Other options are `Angular`, `Svelte`, `Vue.js` and others.
- simplify common patterns
- provide common components
- improve performance
- increase device converage

Jordan Walke made React.

JSX is where Javascript and HTML are paired together. It then uses `Babel` or `Vite` (which runs `Babel`) to separate them. It can take something like:
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
A router makes is so that we only need one HTML page. When we click a button that would normally sqitch a page, it will instead just replace the content. There are a lot of routing packages. We are using `react-router-dom` which inherits a lot from `react-router`.

The basic way to do this is a `BrowserRouter` component that covers the whole app. It has a `Link` or `NavLink` component that captures events. It then modifies what is rendered using `Routes` component with the `to` and `path` attributes.

This is what it looks like:
```
function Page({ color }) {
  return (
    <div className="page" style={{ backgroundColor: color }}>
      <h1>{color}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/">Red</NavLink>
          <NavLink to="/green">Green</NavLink>
          <NavLink to="/blue">Blue</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Page color="red" />} exact />
            <Route path="/green" element={<Page color="green" />} />
            <Route path="/blue" element={<Page color="blue" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

The `BrowserRouter` covers the whole component return. The `NavLinks` handle the navigation.

We can install `npm install react-router-dom` to get it.

# Toolchains
With lots of code running around, we use different tools to streamline our process.
From Github

> - Code repository - Stores code in a shared, versioned location.
> - Linter - Removes, or warns of, non-idiomatic code usage.
> - Prettier - Formats code according to a shared standard.
> - Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
> - Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
> - Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
> - Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
> - Testing - Automated tests at multiple levels to ensure correctness.
> - Deployment - Automated packaging and delivery of code from the development environment to the production environment.
> The toolchain that we use for our React project consists of GitHub as the code repository, Vite for JSX, TS, development and debugging support, ESBuild for converting to ES6 modules and transpiling (with Babel underneath), Rollup for bundling and tree shaking, PostCSS for CSS transpiling, and finally a simple bash script (deployReact.sh) for deployment.














# Compiling JSX
`vite`
`npm run dev`

Type o and hit enter.

Adding routing

# React Methods
`React.`
- `createElement` will generate HMTL and when the user interacts with those, React will react.
