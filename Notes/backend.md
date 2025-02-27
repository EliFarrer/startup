# Making Service Requests
The browser inplicitly asks for `index.html`. Then it gets the file from the server. The server returns those static files.

What if the JS running in the front end could make their own requests? So they introduced the XML API. It can go and return the weather or just about anything you want.

We make service requests with `curl`
- `curl https://www.byu.edu` gets the html for byu

We can change our server to call up service endpoints. These are just functions/methods. Sometimes they are called API's. My service can also call other services like a database or other API.

When we hard reload a page, it makes a bunch of service requests.

`xhr` are service requests.

Everything is a resource

How do we get a resource: `https://byu.edu:443/api/city?q=pro#3`
- `https://` is the scheme or what language we are speaking in
- `byu.edu` is the domain name or who we want to talk to
- `:443` is the port or what software we want to talk to, kind of like the address.
- `/api/city` is the path
- `?q=pro` is the parameter (separated with `&`)
- `#3` is the anchor (one of the sections (often an id on an html tag))

So this likely returns a city

Our server has two programs that are running. One is simon, the other is startup. Both are running on different ports.

It would be confusing if you sayd go to port 3000 on my server. So instead by default go to port 443 (port 80 is the insecure one) with a specific domain name (like `simon.` or `startup.`). So we have Caddy listening on 443. Caddy has a table for the `simon.` or `startup.`. It will then forward it to one program or the other and then return it at the end. Caddy is called a proxy. The programs it runs are differentiated by the subdomain name.

There is another program called SSHD which is how we run the deployment scripts. It is on port 22.

When we go to a website while our port is running, it will connect over port 443, but then slide us over to another port.

HTTP Requests
Server doesn't make requests to the client.
```
POST /user HTTP/1.1
Host: cs260.click
User-Agent: curl/7.77.0
Content-Length: 14
Accept: application/json, text/plain, */*
accept-encoding: gzip, deflate

{"name":"tim"}
```
- `POST` is the method
- `/user` is the path
- `HTTP/1.1` is the version
- `{"name":"tim"}` is the body
- everything else is the headers

HTTP Methods:
- `GET` get a resource
- `POST` create
- `PUT` update


Response
```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 15
Content-Encoding: gzip

{"id":"12", "name":"tim"}
```
- `200 OK` is the status

Status codes
- `2xx` are the successful one
- `3xx` succeded but not getting what you asked for
- `4xx` bad request
- `5xx` server error

Content types: Mine types
- `text/html`
- `application/json`
- `image/jpg`
- `video/mp4`

Making a request
`curl -v https://quote.cs260.click`

From the browser, we can only do `GET` requests.

`curl -X POST https://quote.cs260.click -d '{"author":"lee", "quote":"code fast"}'` is a valid request, but the endpoint doesn't actually allow you to do this.

Fetch is the `js` that will make a request `fetch(url).then(r => r.json()).then(j => console.log(j.value))`. First makes the request, converts to json and then prints it.

`fetch(quote.cs260.click).then((r) => r.json()).then(t => console.log(t))` 

# Now we are writing a backend service thing
We make a fetch request - by default is `index.html`. We write a super small program that listens and returns something. Everything up to the port gets to the right program. The program takes in the path and returns something (like a json file). We can return html, or static files.

# Service Design
How can we use good software design? The endpoints we are using will be called by other people.

# Express
We use npm to pull down express which makes this easier.

> "People tell you to not reinvent things, but I think you should ... it will teach you things" - TJ Holowaychuk

Express is just some js code that makes some wrappers over network requests.

5 objects:
- `express` constructor and default functionality. Top level object, when we call it it will create the app
- `app` is the service application, sets the port.
- `req` and `res` app gives you request and response. HTTP request and response.

`mkdir tj`
`npm init -y`
`npm install express`


```
const express = require('express');         // note that all objects are also functions in JS, this imports the code
const app = express();                      // that exports one object called express

// specify endpoint
// whenever we have a get request, we take anything (*, could also be a specific path)
app.get('*', (req, res) => {                // any get method will send Hello Express! right back
    res.send('<h1>Hello Express!</h1>');
});

app.listen(3000, () => {                    // what port we want to listen on with a function to call when it works
    console.log('Server is running on http://localhost:3000');
});
```

run from the console `node index.js`. Then we go to localhost with the port.

If the port is already in use, it will say so. 

Run the program from vs code, then use a curl request `curl -v localhost:3000`. Express looks at what you return and determines if it is a string.

We could also do something like `res.send(404, '<h1>Not found</h1>');`. 

It is kinda weird that takes html files and stick it right in your code. So we can return a static file instead. `app.use(express.static('pubic'));`. `app.use` doesn't care if it is a get request or anything else. It will return whatever they asked for. So we can create files like `index.html`, `john.html`. Then when we request `localhost:3000/john.html` it will give you that. We can even serve up images or things like that by replacing the file with `image.png` or something like that.

# Responses
```
res.send('<p>html</p>');    // HTML
res.send('text');           // HTML
res.send({ x: '3', y: 4 }); // JSON
res.json({ x: '3', y: 4 }); // JSON
```

The order of your handlers is important. If you have a valid index.html that you register before a * handler, it will go get the index.html.

Put these in Get handlers
```
res.redirect(301, 'https://cs260.click')    // redirect if the page has moved

res.sendFile('index.html', {root: 'public' });  // basically the same thing as static files, but only for one

// these are the same
res.status(400).send('trouble in River City');  // status code.
res.send(400, 'trouble in River City');
```

# Middleware
This is a standard design method (like iterators). It doesn't really know how to do things, but it calls other stuff to do different things. The idea is we get some sort of request, then it goes to request, next and then request, then response and pass out the HTTP response.

We don't want Bob to steal our money. In our case it is more like an authToken or something like that.
```
function noBobs(req, res, next) {       // if a certain case (/bob path), it will return something and if not, it will default to next function.
    /bob/.text(req.path) ? res.status(401).send('No Bobs!') : next();
}

app.get('/secrets', noBobs, (req, res) => {    // if noBobs succeeds, it will call the next function (req, res)
    res.send('<p>Hello</p>');
});
```
This is useful for authentication. Make it a secure enpoint basically.

We could even change the request
```
function noBobs(req, res, next) {       // if a certain case (/bob path), it will return something and if not, it will default to next function.
    res.isBob = /bob/.test(req.path);
    next();
}

app.get('/secrets/*', noBobs, (req, res) => {    // if noBobs succeeds, it will call the next function (req, res)
    res.send(\`<p> hello bob? ${req.isBob ? "yes" : "no"}\`);
});
```

Parameters
```
// 
app.get('/store/:id/:time', (req, res) => {
    res.send({ id: req.params.id, time: req.params.time });
});

app.put('/*/:id', (req, res) => {
    res.send({ update: req.params.id });
});

app.dlete(/\/store\/(.*)/, (req, res) => {
    res.send({ delete: req.params[0] });
});
```

Parsing json files
```
app.use(express.json());    // parsing json requests

app.put('/data', (req, res) => {
    res.send(req.body.msg);
});
```


