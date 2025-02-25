# Intro to class 1/19/25
Tim Cook hiring specifications
- collaborate
- creativity
- curiousity
- expertise

Canvas is used for grading. It has all the due dates in it. GitHub is used for other things.

- Checkboxes: in Topics from the Schedule is a TODO.
- Rocketships: things that will be used for our startup/application

See TA information and hours. Pull requests.

For Amazon aws account using byu.edu account.

Technologies:
- command line
- git and GitHub
- web servers
- HTTPS/WebSocket
- domain names and DNS
- web certificates
- web design
- security

Frontend: HTML (structure), CSS (aesthetics), JavaScript (the coding) or React (libraries in JS that marke it easier)
Backend: Server (AWS) / Route53 (Hostname service), HTTP (communication protocol) / WebSocket (), Web services, DB (database) / Authentication (store information for users)
The communication between these is the network.

Startup: will have 9 deliverables. Think 100 to 200 lines of code for each deliverable.s
Frontend:
1) Spec: specification and pitch
2) AWS: rent a server and get a domain name
3) HTML: structure of the code
4) CSS: write the style
5) React 1: use JavaScript for web framework
6) React 2: user interaction
Backend:
7) Service: return requested data
8) Database/Login: authentication data (security)
9) WebSocket: server sends information to client without a request

Startup ideas:
- game
- chat
- url sharing
- shared story authoring
- book reviews
- location sharing
- calendaring
- voting
- favorite website sharing
- weather tracking
- Bank
It needs to be able to send updates to the client without a request. That will satisfy the WebSocket need. Send live updates.

## Git
The .git contains the history and all the changes. Clone and push/pull connects the developer environment to GitHub. Cloning takes things from github and gives it to us. We add and commit it on our end.
Clone vs push pull?

## Startup specifications
- may include a uml diagram

# GitHub assignment
## Opening a new repository
Open a new repository on github (add a readme, .gitignore, public/private)
make a backup of your old data
copy the clone command and use `git clone <link>` in the file on your computer that you want
copy the data over to the new .git (maybe use -r if there are sub directories and use a * to copy all) `cp -r ArduinoClasses_bkp/* ArduinoClasses`
git add .
git commit -m "message" will stage the message to be pushed
git push
make sure the files are online

git commit -am "message" will add everything and commit it with that message
git log shows the commits allong with the messages

### Commit SHA
The SHA is a unique identifier for different versions of your code. `git checkout sha` where sha is the number will allow you to go back to that version to see what it contains.
`checkout master` will take you back to the main branch

so add takes something from your machine and stages it
commit takes it from stage and sends it to the .git directory
checkout takes it from the .git directory and makes it the current one
push takes it from .git and adds it to GitHub
pull takes commits from other users and applies them to the things we have on our device.
`git fetch` will look at what changes have been made to you repository and if you `git status` it will show you. Then just `git pull`

## Difference
to compare the difference between two versions, use `git diff` You can spcecify two SHA's to compare, or you can use `HEAD` which is the main branch. `HEAD~1` will be the commit before, and so on and so forth.

## 3 Forking
This is when you want to mess around with some open source code. It is similar to a clone, but it just clones to GitHub. This makes it easy to pull down updates from the original or upstream repository.
branches vs forks?
You can push changes (which become pull requests). The owner can look at your changes an dchoose to accept them or not. Then integrate them into the main repository

## Branches
This allows us to work on a feature without interrupting the main branch of code.
`git branch <name>` lets you create a branch. You can `checkout` that branch and `commit` to it. To merge both branches, you do `git merge <name>` where name is the name of the branch.
If you don't end up wanting the feature, just never merge it.

# Dev Environment 1/14/25
React is just more javascript that makes web development easier. It also makes it so that you can route (move between pages). The websocket is where we push things from the server to the browser because it is normally the other way around. The websocket is only active when the page is open.
Look up uml diagrams. Endpoints are just methods or functions that we can call on a server. The service can be thought of a class. The endpoints are the methods.Need a third party call to other servers and endpoints. Third party services are on a github repo on the assignment. The thrid party serever can be called by the frontend or even the backend. Have your frontend call someone else's backend. Call the dinosaur game.
How does the diagram work?

## ssh into your server
ssh, give it key file, with ubuntu@<dns> Then you can give it shell commands. THe Caddyfile is how it knows how to redirect the server

# Server 1/16/25
Today we are renting EC2 Web service for the server, and using Route53 DNS to get our dns (Domain-Name-System).

## Technology Stack
What technology are you using? All of these are basically abstractions. Our tech stack `React > Caddy2 > Node js > mongoDB`.
- `Nodejs`: Browsers always have a javascript is in, React is just the chrome js interpreter taken out and used locally. Node js is just the chrome interpreter for js that we can use outside of a web browser.
- `Caddy2` Routes different domain names to either your startup or you project. This way, we don't need to buy multiple servers for every project we have.

> The frontend is code that executes on the browser (html, js, css, React). The backend is all the server stuff. Two apps communicating (frontend and backend).

## How does the internet work?
Each device has an ip address (public). Our devices are connected to an ISP (internet service provider). These all talk to each other and route to different computers and eventually get to our device. 
> for us, `Caddy2` makes it so that we can route different `dns` names to different ports.

The problem is, humans aren't good at memorizing numbers, so we give symbolic names (called the domain name system `dns`) to ip addresses. When we want to connect to a computer, our computer takes our `walmart.com` and sends it to the Domain Name System to get the corresponding ip address. We then search through the internet net of wires until we find the right computer and then we can connect to it.
> `dig +short dnsName` will tell you the ip address of a dns name.

> When we wnat to connect to a computer, our computer hops across a ton of different computers. We can see this by `traceroute dns`.

### Ports
We want to be able to talk to multiple devices at once from our device. So each device has multiple ports. So like port `443` is a public html port, and then connects and moves you over to a private port that is temporary. The front door is `443`.

### TCP and IP layers:
| Layer | Example | Purpose |
| ---- | ---- | ---- |
| Application | HTTPS, SSH | Functionality like browsing, ssh|
| Transport | TCP/UDP | Packet delivery |
| Internet | IP | Establishing connections |
| Link | Fiber, hardware | Physical connections |

- UDP doesn't care if all the packets are recieved (gaming)
- TCP manages sending and resending packets.

## Domain Name System (DNS)
`walmart.com` is a domain name but we are just connecting to an ip address. Browser looks at dns system that connects a web address to an ip address. Then the browser takes that and connects to the actual computer in walmart. Some dns names have multiple ip addresses for them for redundancy.

- `curl -v byu.edu` ipaddress:port.

### Domain names
`react.simon.cs260.click` == `subdomain.*secondary.top`

When you buy your domain name you buy the sld (secondary level domain) and tld (top level domain). 

You are in charge of the subdomains and can have any amount you want.

### TLD's
Looks at this first to reduce search space.
originals: `com`, `org`, `edu`, `gov`, `mil`, `int`, `net`
country: `uk`, `cn`, `tv`
generic: `click`, `gold`, `ceo`, `fishing`

### localhost `127.0.0.1`
The only domain name that is hard coded. This is my computer.

### DNS record types
- A/AAAA address records map a domain name to an ip address
- CNAME are just aliases map a domain name to another domain name
- NS the one that gives you authority (linked to public dns records)
- SOA is th einfo for my contact info
> `whois byu.edu` will give you information about a domain name

**Make sure to respond to the email to confirm for the assignment**

## Servers
We also need to buy the server that hosts the ip address. Then, we can connect (through DNS record types), our dns to our ip address (server).

### Instructions
1) dns with Route 53, get a server with ec2 > Launch instance. Make sure to do it in virginia. Give the server a name, lee-cs260-webserver, what operating system you are using is a custom one. t2.micro.....
2) key pair (ssh) into the server in virginia. Private key on your computer (not on github!)
3) Create a security group (ssh, anywhere, https and http)
4) then launch instance
5) public ip address (network settings > network settings)


## Caddy
Caddy listens to http requests and responds or reroutes the request. So we can have multiple web services or projects as a single one. This is called a `gateway` or `reverse proxy`. Basically caddy can send out files like `index.html`, or re route to services like an app.

Now I can only listen on one port, so we have Caddy listen on port 443 that will assign our two web services to one web service or another.

### `Caddyfile`
- determines where static files come from, and where to send proxy requests.
### `public_html`
- the files that come up when someone requests the root.

## Logging into our server
`ssh into student account`
ls
Caddyfile tells things where to port to.
the html is the base thing
put your domain name in the caddy file.
`sudo service caddy restart` will apply the settings.

## SSH into server
```
ssh -i [key pair file] ubuntu@[ip address]
```

### EC2
This is where we rent a server from amazon to run all our code on.
> See also info about elastic ip addresses `34.202.198.8`

### Route 53
This is where we register a domain name. It connects to the DNS service to register a TLD.
dns name is now connected to my ip address of the server i rented. `morsecodeclicker.click`

It is here we create records that handle different subdomain names.

### HTTPS, TLS, and web certificates
Right now, our connection is not secure.

TLS is the protocol for how we encrypt data.

Web certifiacates are made by a 3rd party. We use public and private key encryptiopn. Web certificates used to be super expensive, but some mozilla people came up with a way to make it free. It is called `Let's Encrypt`. Caddy uses this.

So we just edited the caddyfile to accept `https`

## `deployFiles.sh`
Gets the key file, dns name
Removes the old code
adds a new directory
scp's the new code into the new directory







# Questions
Hosted zone


# 2/6/25
Start with the simon css repository. name it `simon-react-p1`.
All of the files are in one directory.
Vite will become our new server.
We need to change our project to be an npm project. 
`npm init -y` will say yes to everything.
uses package.json file.
`scripts` section are commands that will run everything on the right.
`npm run thing`
install vite `npm install vite@latest -D` means we only do it when we are bundling.
- this adds a dependencies. It will keep track of these `devDependencies`
- creates `node_modules` is all the soucre code we take from the web.
    - We don't want to git commit this to github. We will just assume that the user will install those things.
edit the scripts
`npm run dev`
- type h for options

We want to reorganize our flat file structure
Rename `main.css` to `app.css`. So we no longer have an `index.html`. So we add it in the main directory.
We add the correct things into our `index.html`
Then we add an `index.jsx`
Throw the jsx file in there.
We used to use bootstrap in our css, and we `import 'bootstrap/dist/....` So we `npm install bootstrap react-bootstrap`. So we install `bootstrap` and `react-bootstrap`. 
This adds these to our dependencies. `bootstrap` is then added into `/node_modules`
We are also installing `react` which will do the same thing.
`npm run dev` will run the thing.
Now we will display some stuff.

You can't bring the body tag in, so we copy all the `header`, `main`, and `body` code. Then we past it in to the return.
JSX is not html. If you have keywords that javascript uses, you need to change them so it doesn't get confused. Change `class` to `className`

This is basically just setting up the infractructure.

Now we create a `login.jsx` that just returns the login module. Then we reference it in `app.jsx`. Note that you need to import it as well. `import {Login} from '.login/login';`. Then you just copy the login info into the thing. We had to destructure the object.
Login is now done.

Then we go through to our other files and add `file.jsx` and update the functions.

Now we need a router in our `App`. `<BrowserRouter> stuff </BrowserRotuer>`. Then instead of anchor links (which are run by chrome), we want our website. So it will talk to its parent and the parent weill tell it to go. Change it to `NavLink`, it is not an `href` anymore, but a `to`

Then we add routes. This will route to different pages.

We have two components in `app.jsx`, one is `App` and the other is `NotFound`

Command shift l will multi select. 

Once we do all this, we can get rid of the html files.

We need to bundle the thing up before we send it over. `npm run build`, this creates things in `/assets` that will make it ready to run in the browser. So we need a `deployReact.sh`, and there is the real script to use. Then it scp's the build directory.

# Simon React Phase 2
Remember to do `npm init` and that after that you can do `npm run dev` and stuff like that.

## About component
Fetches a quote. We wont do that yet, but we can use `useEffect` (the first time) to set the correct things.

Goes from somethign like this:
```
<main className="container-fluid bg-secondary text-center">
  <div>
    <div id="picture" className="picture-box">
      <img src="placeholder.jpg" alt="random" />
    </div>
    <p>...</p>

    <div id="quote" className="quote-box bg-light text-dark">
      <p className="quote">Words are cheap. Show me the code.</p>
      <p className="author">Linus Torvalds</p>
    </div>
  </div>
</main>
```

to this:
```
export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    setImageUrl(`placeholder.jpg`);
    setQuote('Show me the code');
    setQuoteAuthor('Linus Torvalds');
  }, []);

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='random image' />
        </div>

        <p>...</p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}
```

So on the first time `useEffect` is called, it will update the image, quote and quote author. Each of them has a default state. But it will replace them when it fetches them.

## Play component
- `delay.js` returns a promise that `resolves` the promise after the timeout.
- `gameNotifier.js` Every time you construct a `GameEventNotifier`, it will call setInterval which will calculage a score, date, and username. Then it will send the event to a list.
- `play.jsx` is really just the setup of the interface
- `players.jsx` 
It broadcasts an event (someone getting a new score) every five seconds with `setInterval`. This happens when you construct it.

Not sure what happens with `remove` and `add` Handler...

## Scores component
Accesses scores from `localStorage` and displays them. 

## Login component