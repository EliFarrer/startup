const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://mongo:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=${config.host}`

const client = new MongoClient(url);
const db = client.db('morse');
const users = db.collection('users');
const scores = db.collection('scores');

// create a test connection function and immediately call it.
(async function tryConnection () {
    try {
    await db.command({ping: 1});
    console.log(`DB connected to ${config.hostname}`);
  } catch (ex) {
    console.log(`Error with ${url} because ${ex.message}`);
    process.exit(1);
  }
})()

async function addUser(user) {
    await users.insertOne(user);
}

function getUser(email) {
    return users.findOne({email: email});
}

function getUserByToken(token) {
    return users.findOne({token: token});
}

async function updateUser(user) {
    await users.updateOne({email: user.email}, {$set: user});
}

function getScores() {
    const query = {score: {$gt: 0, $lt: 200}}
    const options = {
        sort: {score: -1},      // sort the score in descending order
        limit: 10,               // limit it to 10 entries
    }
    return scores.find(query, options).toArray();
}

async function addScore(score) {
    await scores.insertOne(score);
}

module.exports = {
    addUser,
    getUser,
    getUserByToken,
    updateUser,
    getScores,
    addScore
}