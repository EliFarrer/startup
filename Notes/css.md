# CSS
Stands for Cascading Style Sheets. This makes things pretty. 
> each browser has their own default styling for css

## Inline style
in the paragraph tag, add an attribute called `style`

`style`:
- `"color: red;"`
- `"font-size: 10vh;"` (view height)
> note that inline styling uses strings to parse

## Style tag
```
p {
    color: green;
}
```
This makes it so the selector `p`, applies these declarations (in the curly brace block) (`color: green;`). `color` is the property, `green` is the value.

Within head, we can add a `<style>` tag and include these declaration blocks.

## Using and external style sheet
This makes it so your format can be consistent across multiple html files.
```<link rel="stylesheet", href="/test/styles.css">```
This specifies that we are linking to a stylesheet with the name `styles.css`

### Selectors
#### Type Selector
Selects all elements of the given name, ie `div` or `p`.
#### Class Selector
Selects all elements with the `class` attribute. It requires a `.` in CSS.
```
.spacious { marign: 2em; }
```
Will select all html elements that have the attribute, `<p class=spacious>hello</p>`
#### Id Selector
Does the same thing with the `id` attribute and requires a `#` sign.
Generally. There is only one element of a specific id.
#### Attribute Selector
You can select elements based on their attributes.
```
p[href='summary.png'] {
    color: red;
}
```
You can even do `p[href*='https://']`

### Pseudo Selector
This lets us do things when you hover over the paragraph. THere are a bunch of other things as well.
```
p:hover {
    color: green;
}
```

> Type or universal selector precedes the class or id selector.

### Multiple Selectors
- element class selectors `p.highlight`
- List means any given selectors `body, section`
- Descendant a list of descendants `body section`
- Child a list of direct children `section > p`
- Pseudo state based `p:hover`

### Combinators
| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `div ~ p`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `div + p`      | Any p that has an adjacent div sibling     |




```

> MDN is a great place to play around with css
> a great CSS debugger is in the inspector on chrome

- Element selectors change all elements of a specific name (like `p` or `div`).
- ID selector applies to things of a specific id.

Html: ```<p id="cow">Cows are cool<p>```

CSS: ```#cow {  font-weight:bold;   }```

## Fonts
`@import url()` to import a font from google fonts. This will import the font onto whatever device it is running on.

## Animations
```
p {
    text-align: center;
    font-size: 20vh;
    animation-name: demo;
    animation-duration: 3s;
    animation-d
}

@keyframes demo {
    from {
        font-size: 0vh;
    }
    95% {
        font-size: 21vh;
    }
    to {
        font-size: 20vh;
    }
}
```
Across 3 seconds it starts at 0 width, and 95% through the 3 seconds, it will be at 21 width, and then the last 5% of the time it will shrink down to 20vh

head has metadata (including title)

> a `*` will apply to all elements (give a bordre)

Responsive dimensions

## Responsive Design
5 Major tools
### `<meta name="viewport" content="width=device-width, initial-scale=1">`
This tag tells it to not automatically scale things. `initial-scale` says to not squeeze pixels down

### `aside`
```
aside {
    float: right;
    padding: 3em;
    margin: 0.5em;
    boarder: black solid thin;
}
```
Basically wraps an image and sticks it on the right.

### `display` in `<div>` or `span`
For `div` the default is block, for `span`, the default is inline
`display` parameter is in your css.
- `block` takes up entire width of container with height of the content
- `inline` height and width of the content
- `flex` parent container display is flex, children are laid out in a flexible way
- `grid` all children laid out in a grid format

#### `grid`
Want to have a box with a bunch of cards. so we use `<div class="containter">`. `div` is the random element. You can use it to represent things that are not defined.

In CSS
```
.container {
    display: grid;  // default is block
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    grid-gap: 1dm;
}
```
At least 300 px wide, 1 fr is a fractional unit will divide the space you among the children.
```.card:nth-child(odd) {
    //new color
}
```
Border radius is based on em. So if we change the size of the font it will change the curve of the corners. em is the current element, rem is the root m element.

#### `flex`
```
.container {
    display: flex;
}

.item {
    flex: 0 0 50px;
}
```
First value is grow, second shrink, third is basis (default).

In body level we have column wise (header, main, and footer)
Then inside that we have another flex organized row wise.

### Media Queries
```
@media (orientation: portrait) {
    div {
        transform: rotate(270deg);
    }
}
```
Will rotate an element. When it is in portrait, all `div` elements will be rotated.

You can use this to change the orientation of a `flex` container too.

### CSS frameworks
Bootstrap and Tailwind is basically CSS that is copied and pasted.s
`cdn` is content delivery network

