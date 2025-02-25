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
