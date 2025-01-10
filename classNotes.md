# Intro to class
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