const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

// define the port with command line arguments
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// all of our requests will automatically be parsed as json files
app.use(express.json());

// creates a router that will automatically funnel any /api requests to the appropriate handler
let apiRouter = express.Router();
app.use(`/api`, apiRouter);

// basic data
let users = [];
let scores = [];

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await createUser(req.body.email, req.body.password);
  
      setAuthCookie(res, user.token);   // once a user is created, they are automatically logged in
      res.send({ email: user.email });  // return the user email
    }
  });
  
// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {   // verify the password
            user.token = uuid.v4();
            setAuthCookie(res, user.token);     // create an auth token for them
            res.send({ email: user.email });    // send the email back
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });      // if the user is not authorized
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;  // if the user exists
    }
    res.clearCookie(authCookieName);    // clear the cookie
    res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

// GetScores
apiRouter.get('/scores', verifyAuth, (_req, res) => {
    // before doing this, it will verify that a user is authorized
    res.send(scores);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, (req, res) => {
    // before doing this, it will verify that a user is authorized
    scores = updateScores(req.body);    // updates the scores (top 10)
    res.send(scores);
});

// Default error handler
app.use(function (err, req, res, next) {
res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
res.sendFile('index.html', { root: 'public' });
});


// begin the backend service
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// updateScores considers a new score for inclusion in the high scores.
function updateScores(newScore) {
    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }
  
    if (!found) {
      scores.push(newScore);
    }
  
    if (scores.length > 10) {
      scores.length = 10;
    }
  
    return scores;
}
    
async function createUser(email, password) {
    // hashes the password
    const passwordHash = await bcrypt.hash(password, 10);

    // user object
    const user = {
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    
    // throws it on the end
    users.push(user);

    return user;
}

// lets us find a user based on different attributes
async function findUser(field, value) {
    if (!value) return null;

    // goes through our list of users looking for where we have a user's field that matches our value. Then it returns that user
    return users.find((u) => u[field] === value);   // checks values and types the same
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
        res.cookie(authCookieName, authToken, {
            // the parameters for a cookie: https, only use http (not js), and stick to the same domain
            secure: true,
            httpOnly: true,
            sameSite: 'strict',
        });
}