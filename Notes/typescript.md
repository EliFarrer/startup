JS and Python are the top two used languages. Dynamically typed means the compiler doesn't really care. Hungarian notation is where you include the type in your variable names. Kinda weird. Do we need to include the type when declaring variables or is it obvious.

Typescript is js with typing and some other stuff. We have to take typescript and compile it to javascript. When we compile it, it will check the types.

## Interfaces
Typescript also creates an `Interface`. An interface is a polymorphic thing. You change how you look at the object.

```
interface Book {
    tite: string;
    id: number;
}
function catalog(book: Book) {
    console.log(`New ${book.title}, ID: ${book.id}`);
}
const myBook = { title: 'Essentials', id: 2938 };
catalog(myBook);
```

## Union
Either thing.
```
// enumeration
type AuthState = 'authenticated' | 'unauthenticated';
let auth: AuthState = 'authenticated';

// in function
function square(n: number | string) {
    if (typeof n === 'string') {
        console.log(`{$n}^2`);
    } else {
        console.log(n * n);
    }
}
```

## Enumerations
Better way than Union enumerations
```
enum AuthStateEnum {
    Authenticated = 'authenticated',
    Unauthenticated = 'unauthenticated',
}
auth = AuthStateEnum.Authenticated;
```

## Type Coercion
```
const el = document.querySelector<HTMLElement>('#pic');
if (el) {
    const width = el.offsetWidth;
}
```

Normally querySelector returns an `Element`, but we need to cast it to an `HTMLElement`

## Other neat features
Linters are tools that go through your code to check it. TypeScript has this installed.

So if you have an undefined variable `console.log(xx);` it will catch it

This will return undefined if it isn't there. So if this is undefined, then it will catch it.
```
const el = document.querySelector<HTMLElement>('#picture');
const weidth = containerEl.offsetWidth;
```

# Using TypeScript
Requires transpiling. We need to do this on the backed and then on the frontend.

Node.js uses the v8 engine (the thing in the browser), but not in the browser.

make ts directory

node index.ts

node -v

node --experimental0transform0types index.ts

pbpaste....


For the frontend, vite automatically checks for typescript
```!DOCTYPE html>
<html lang="en">
<body>
<div id="root"></div>
<script type="module" src="index.tsx"></script>
</body>
</html>
```

Then in `index.tsx` we create the react root.

Note that `count?: number;` means `count: number | undefined | null`

`npx vite` is a short hand for the scripting thing we do with `npm run dev`

Typestripping is where it transpiles and then just gets rid of it.

# Performance
You live or die by the performance. One second delay in loading a page has detremental effects (look at the stats).

Things to think about:
- optimize for real usage (have a crummy computer and see what it is like)
    - downgrade your experience from Chrome
- optimize based on data (what is the real problem: caching, bandwidth, cpu, storage)
    - don't preoptimize

If there is a problem
- look at download size
- compress, reduce, minify
- lazy load (don't have to load everything immediately)
- use psychology
    - like a spinner so it doesn't feellike it isn't working
    - like usinga "hmm" before replying

## Tools
`tools.pingdom.com`
`dotcom-tools.com/website-speed-test`

**First Contentful Paint** the first thing shown on the screen
**Largest Contentful Paint** the biggest thing that it shown on the screen
**Cumulative Lauout Shift** how much your website shifts around

Go to network and see the logs.

Caching things can be helpful for speed. (300 message says you already have the data)

See also performance tab in developer tools.

Also Lighthouse is a thing that gathers information about performance.

**SEO is search engine optimization** how well you are going to do in google search.

Network tab you can throttle your network.

You can go to the three dots, more tools, then performance monitor, and also task manager.