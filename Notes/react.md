# Framework
Remember react is just javascript that is commonly used.
- simplify common patterns
- provide common components
- improve performance
- increase device converage

Jordan Walke made React.

JSX is where Javascript and html are paired together.
- `const jsx = <p>Hello World</p>;` this will not work in the browser
- `const jsx = React.createElement("p", null, "Hello World");` will transpile it with `Babel`
    - `null` represents no elements
    - `Babel` basically does all the work.
- `<p>Hello World</p>` will render in the browser in the DOM

We can use babel. Transpiling happens on the server, execution happens on the browser. We can do this in CodePen.

```
const Hello() {
    return <div>Hello React</div>;
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Hello />);
```

We inject the code at `'#root'`. The `{}` allow us to escape the html to put in javascript.s

This will inject the phrases.
```
const Hello = ({ phrase }) => {
    return {
        <div>Hello {phrase}</div>;
    }
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<div><Hello phrase="Friends"/><Hello pharse="enemies" /></div>);
```

In javascript, it passes in a single parameter into functions. Props, but if we use `{name}` we can pull out an individual element of those properties.


# Router
Wehen we click a button, it needs to change the state.

Single page application, we keep the header and footer an dthen pull in the login, play, or scoreboard.

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