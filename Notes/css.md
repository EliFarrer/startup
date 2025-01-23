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