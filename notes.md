# CS 260 Notes
See also [lecture notes](Notes/lectureNotes.md)
See also [html notes](Notes/html.md)

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Simon Introduction Notes

### HTML
Basic Setup of the website.
- Nothing actually works. It is just the appearance.
- You can click things to log in, but it doesn't actually check the password or verify anything
#### `about.html`
- it looks like in the header, it sets the width of the application to the device width
- it has a title
- it has a menu with different options (I guess html can handle menus and some basic functionality)
- this contains the **about** page (uses `placeholder.jpg` in this) 
#### `play.html`
- we can see the setup of players and notifications
- beneath that it looks like it is creating the shapes of the buttons with different colors.
#### `scores.html`
- it looks like the beginning of all the html files are the same (menu setup)
- most of this is just formatting
#### `index.html`
- this is the default page that is linked to
- button types/classes
- uses the favicon
#### `deployFiles.sh`
- bash script

### CSS
It seems like CSS separated the formatting and visuals from html.
- no functionality either
- looks a lot better though
#### `about.css`
- looks like setting up metadata
- changes from the html version. It seems like it is now connected to css
#### `about.html`
- has some increased navigation?
- same basic info at the bottom
#### `deployFiles.sh`, `favicon.ico`, `placeholder.jpg`
- looks about the same
#### `main.css`
- setup for css?
#### `play.css`, `play.html`, `scores.css`, `scores.html`
- rather than doing everything manually in html, it looks like they took all the formatting out and almost made classes for the different elements in css that they can reference later.
- for scores, css defines a `td` and it looks like html can reference that

### React
- no functionality
- looks the same?
#### `deployReact.sh`
- new file
#### `index.html`, `index.jsx`
- a lot simpler
- requires javascript
#### `package.json`, `package-lock.json`
- importing different packages
- `package-lock` makes it work for different operating systems?
#### `public` folder
- contains all the images
- now contains sounds
#### `src`
- each window has its own folder with functionality, formatting, but no html
- what is the difference between js and jsx?
#### `src/app.css`
- a lot simpler than previous versions
#### `src/app.jsx`
- it looks like the app no longer runs on html, but is run through Javascript

### Service
Now the login works and the app is actually functional. It seems to get updates from other players as well although i am not sure if those are automated or not.
#### `service/index.js`
- creates and handles new users and returning users (resets every time the window is closes)
- handles score updating
#### `service/package-lock.json`
- seems to have information needed for handling data transfer to a server?
  - regular expressions?
#### `service/package.json`
- has basic info for the website

## AWS Notes

## HTML Notes
this is testing a pull command
now i am testing fetch

## VIM Notes
Starts in command mode, press `i` to go to instert mode. See [Vim Cheat Sheet](https://vim.rtorr.com/) and the [Class Notes](https://github.com/webprogramming260/.github/blob/main/profile/essentials/editors/editors.md) on the commands.