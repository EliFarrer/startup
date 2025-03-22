const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://mongo:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=${config.host}`

const client = new MongoClient(url);
const db = client.db(morse);
const users = client.collection('users');
const scores = client.collection('scores');

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
    return users.getUser({email: email});
}

function getUserByToken(token) {
    return users.getUser({token: token});
}

async function updateUser(user) {
    await users.updateOne({email: user.email}, {$set: user});
}


module.exports = {
    addUser,
    getUser,
    getUserByToken,
    updateUser
}