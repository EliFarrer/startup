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
```
p {
    <!--Stuff-->
}
```

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

#### Pseudo Selector
This lets us do things when you hover over the paragraph. THere are a bunch of other things as well.
```
p:hover {
    color: green;
}
```

> Type or universal selector precedes the class or id selector.

#### Multiple Selectors
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

## Common CSS Properties
| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis     

## Units
| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

## Color
| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |


> MDN is a great place to play around with css
> a great CSS debugger is in the inspector on chrome

- Element selectors change all elements of a specific name (like `p` or `div`).
- ID selector applies to things of a specific id.

Html: ```<p id="cow">Cows are cool<p>```

CSS: ```#cow {  font-weight:bold;   }```

## Fonts
`font-family` is the main thing to help you determine fonts. You list them out in order of priority.

Four font families
- `Serif` small stroke at the end of letters
- `sans-serif` no extra strokes
- `fixed` all the characters are the same size
- `symbol` non character languages

### Importing
This will host the font on your server.
```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```

This will make them download it
```
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

## Animations
Our animation name is demo. This is the same name we put in keyframes. Keyframes will generate smooth transitions from different points in thime.

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

