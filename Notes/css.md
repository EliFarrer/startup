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

You can also do sudo things where when I hover over the paragraph, it will change the font to green.
```
p:hover {
    color: green;
}
```

> MDN is a great place to play around with css
> a great CSS debugger is in the inspector on chrome

- Element selectors change all elements of a specific name (like `p` or `div`).
- ID selector applies to things of a specific id.

Html: ```<p id="cow">Cows are cool<p>```

CSS: ```#cow {  font-weight:bold;   }```

- Class selectors applyto things of a class. Html: `<p class="intro">Cows are cool<p>`, CSS: `.intro {    font-weight:bold;   }`

- element calss selectors `p.highlight`
- List means any given selectors `body, section`
- Descendant a list of descendants `body section`
- Child a list of direct children `section > p`
- Pseudo state based `p:hover`

`@import url()` to import a font from google fonts. This will import the font onto whatever fdevice it is running on.

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